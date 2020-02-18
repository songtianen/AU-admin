import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Divider,
  notification,
  Popconfirm,
  Modal,
  Button,
  Tag,
} from 'antd';
import { getUserFromRole, delUserForRoleId } from '../../../../api';
import AddRemoveComponent from '../../Common/AddRemoveConponent';
import SearchForm from '../../../../schema/SearchForm/SearchForm';
import schema from '../../../../schema/RoleUser/User';
import AddUserForRole from './addUserForRole';

class EditRoleUserModalContent extends React.PureComponent {
  state = {
    // SearchForm 查询字段
    tableFilter: {
      name: '',
      email: '',
      roleId: this.props.formData.id,
    },
    tableSelectedRowKeys: [], // table 选择的数据

    // eslint-disable-next-line react/no-unused-state
    searchFormExpand: true,
    tablePagedList: [],
    // 分页器
    tablePagination: {
      // 当前是第几页
      current: 1,
      // 每页数量
      pageSize: 10,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: (total) => `Total ${total} items`,
    },
    tableSorter: {
      field: '',
      order: '',
    },
    tableLoading: false,
    addUserForRoleModal: false,
  };

  columns = [
    {
      title: '账号名称',
      dataIndex: 'userName',
      sorter: true,
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      sorter: true,
    },
    {
      title: '用户邮箱',
      dataIndex: 'email',
      sorter: true,
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      sorter: true,
    },
    // {
    //   title: '添加状态',
    //   dataIndex: 'isAdd',
    //   align: 'center',
    //   render: (text, record) => {
    //     return record.isAdd === 1 ? (
    //       <Badge status='success' />
    //     ) : (
    //       <Badge status='error' />
    //     );
    //   },
    // },
    {
      title: '操作',
      dataIndex: 'id',
      align: 'center',
      fixed: 'right',
      width: 120,
      render: (text, record) => {
        return (
          <Popconfirm
            title='确定删除?'
            onConfirm={() => this.deleteUserForRole(record)}
          >
            <a>删除</a>
          </Popconfirm>
        );
      },
    },
  ];

  // SearchForm 搜索
  handleSearch = (filter) => {
    filter.roleId = this.props.formData.id;
    const pager = { ...this.state.tablePagination };
    pager.current = 1;
    this.setState({
      tableFilter: filter,
      tablePagination: pager,
    });
    let query = {
      pageIndex: 1,
      pageSize: this.state.tablePagination.pageSize,
      sortBy: this.state.tableSorter.field,
      descending: this.state.tableSorter.order === 'descend',
      filter,
    };
    this.fetch(query);
  };

  // 搜索重置
  handleReset = () => {
    this.setState({
      tableFilter: {
        roleId: this.props.formData.id,
      },
    });
  };

  // table表格变更
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.tablePagination };
    pager.current = pagination.current;
    pager.pageSize = pagination.pageSize;
    this.setState({
      tablePagination: pager,
      tableSorter: {
        field: sorter.field,
        order: sorter.order,
      },
    });
    let query = {
      // 当前页数
      pageIndex: pager.current,
      // 每页数量
      pageSize: pager.pageSize,
      // 表单的name
      sortBy: sorter.field,
      // 降序
      descending: sorter.order === 'descend',
      filter: this.state.tableFilter,
    };
    this.fetch(query);
  };

  // table 选择器
  onSelectChange = (selectedRowKeys) => {
    // console.log('table表格选择器', selectedRowKeys);
    this.setState({ tableSelectedRowKeys: selectedRowKeys });
  };

  // 删除
  // eslint-disable-next-line no-unused-vars
  deleteUserForRole = async (record) => {
    console.log('删除', record);
    let userIds = [];
    userIds.push(record.id);
    const roleId = this.props.formData.id;
    try {
      const result = await delUserForRoleId({
        roleId,
        userIds,
      });
      // console.log('resulr-=====', result);
      this.setState({
        tableSelectedRowKeys: [],
      });
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: result.msg,
      });
    } catch (e) {
      notification.error({
        message: e,
      });
    }

    this.refresh();
  };

  refresh = () => {
    let query = {
      pageIndex: this.state.tablePagination.current,
      pageSize: this.state.tablePagination.pageSize,
      sortBy: this.state.tableSorter.field,
      descending: this.state.tableSorter.order === 'descend',
      filter: this.state.tableFilter,
    };
    this.fetch(query);
  };

  fetch = async (query = {}) => {
    this.setState({ tableLoading: true });
    // 获取用户列表
    let dataRes = await getUserFromRole(query);
    let data = dataRes.data;
    const pagination = { ...this.state.tablePagination };
    pagination.total = data.totalCount;
    let pagelist = data.rows;
    // pagelist.map((item) => {
    //   return {
    //     userName: item.userName,
    //     email: item.email,
    //     phone: item.phone,
    //   };
    // });
    this.setState({
      tableLoading: false,
      tablePagedList: pagelist,
      tablePagination: pagination,
    });
  };

  componentDidMount() {
    this.refresh();
  }

  //  button 新增
  addUser = () => {
    this.editFormData = {};
    this.setState({
      addUserForRoleModal: true,
      // isAddUser: true,
    });
  };

  // button Popconfirm 删除
  batchDelUser = async () => {
    const userIds = this.state.tableSelectedRowKeys;
    const roleId = this.props.formData.id;
    try {
      const result = await delUserForRoleId({
        roleId,
        userIds,
      });
      // console.log('resulr-=====', result);
      this.setState({
        tableSelectedRowKeys: [],
      });
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: result.msg,
      });
    } catch (e) {
      notification.error({
        message: e,
      });
    }
    this.refresh();
  };

  editModalOnCancel = () => {
    this.setState({
      addUserForRoleModal: false,
    });
  };

  render() {
    const { tableSelectedRowKeys, tablePagedList } = this.state;
    const rowSelection = {
      selectedRowKeys: tableSelectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = tableSelectedRowKeys.length > 0;
    return (
      <div>
        <SearchForm
          schema={schema.searchSchema}
          uiSchema={schema.searchUiSchema}
          handleSubmit={this.handleSearch}
          handleReset={this.handleReset}
        />
        <Divider />
        <AddRemoveComponent
          addFunc={this.addUser}
          onConfirm={this.batchDelUser}
          hasSelected={hasSelected}
          addTitle={'新增用户'}
          removeTitle={'删除用户'}
        />
        <Table
          rowSelection={rowSelection}
          columns={this.columns}
          rowKey={(record) => record.id}
          dataSource={this.state.tablePagedList}
          pagination={this.state.tablePagination}
          loading={this.state.tableLoading}
          onChange={this.handleTableChange}
          scroll={{ x: 768 }}
          size='small'
          bordered
        />
        <Modal
          visible={this.state.addUserForRoleModal}
          width={1000}
          title={
            <span>
              添加&nbsp;&nbsp;
              <Tag color='#2db7f5'>{this.props.formData.name}</Tag>
              &nbsp;下用户
            </span>
          }
          onCancel={this.editModalOnCancel}
          footer={[
            <Button key='back' onClick={this.editModalOnCancel}>
              关闭
            </Button>,
          ]}
          destroyOnClose
        >
          <AddUserForRole
            formData={this.props.formData}
            inRoleUsers={tablePagedList}
            editModal={this}
          />
        </Modal>
      </div>
    );
  }
}

EditRoleUserModalContent.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default EditRoleUserModalContent;
