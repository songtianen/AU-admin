import React from 'react';
import PropTypes from 'prop-types';
import { Table, Divider, notification } from 'antd';
import { getAllUser, addUserForRole } from '../../../../api';
import AddRemoveComponent from '../../Common/AddRemoveConponent';
import SearchForm from '../../../../schema/Common/SearchForm/SearchForm';
import schema from '../../../../schema/RoleUser/User';

class AddUserForRole extends React.PureComponent {
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
  };

  columns = [
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
    let dataRes = await getAllUser(query);
    let data = dataRes.data;
    let pagination = { ...this.state.tablePagination };
    pagination.total = data.totalCount;
    let pagelist = data.rows;
    let inRoleUsers = this.props.inRoleUsers;
    // 找出role下的用户，与全部用户不同的
    let newPageList = [];
    for (let i = 0; i < pagelist.length; i++) {
      newPageList.push(pagelist[i]);
      for (let j = 0; j < inRoleUsers.length; j++) {
        if (pagelist[i].id === inRoleUsers[j].id) {
          newPageList.pop(pagelist[i]);
        }
      }
    }
    this.setState({
      tableLoading: false,
      tablePagedList: newPageList,
      tablePagination: pagination,
    });
    // console.log('this.state', this.state.tablePagedList);
  };

  componentDidMount() {
    this.refresh();
  }

  //  button 新增
  addUserForRole = async () => {
    // 给Role添加用户（请求接口）
    const userIds = this.state.tableSelectedRowKeys;
    const roleId = this.props.formData.id;
    if (userIds && userIds.length) {
      try {
        const result = await addUserForRole({ userIds, roleId });
        this.setState({
          tableSelectedRowKeys: [],
          // editCommonModalVisible: true,
        });
        // 父组件方法
        this.props.editModal.refresh();
        this.props.editModal.setState({
          addUserForRoleModal: false,
        });

        return notification.success({
          placement: 'bottomLeft bottomRight',
          message: result.msg,
        });
      } catch (error) {
        return notification.error({
          message: error.msg,
        });
      }
    }
    return notification.error({
      message: '请选择要添加的用户',
    });
  };

  // table 选择器
  onSelectChange = (selectedRowKeys) => {
    // console.log('table表格选择器', selectedRowKeys);
    this.setState({ tableSelectedRowKeys: selectedRowKeys });
  };

  render() {
    const { tableSelectedRowKeys } = this.state;
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
          addFunc={this.addUserForRole}
          // onConfirm={this.batchDelUser}
          hasSelected={hasSelected}
          addTitle={'新增用户'}
          removeTitle={'删除用户'}
          addPermission={['role_user_add']}
          delPermission={['role_user_del']}
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
      </div>
    );
  }
}

AddUserForRole.propTypes = {
  formData: PropTypes.object.isRequired,
  inRoleUsers: PropTypes.array.isRequired,
  editModal: PropTypes.object.isRequired,
};

export default AddUserForRole;
