/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { Table, Divider, notification, Popconfirm } from 'antd';
import {
  getRoleFromUserId,
  addRoleForUser,
  delRoleForUserId,
} from '../../../../api';
import SearchForm from '../../../../schema/Common/SearchForm/SearchForm';
import schema from '../../../../schema/UserRole/AddRoleForUser';
import AddRemoveComponent from '../../Common/AddRemoveConponent';
import CommonModal from '../../Common/CommonModal';

class EditUserRoleModalContent extends React.PureComponent {
  state = {
    tableFilter: {
      name: '',
      code: '',
      userId: this.props.formData.id,
    },
    // eslint-disable-next-line react/no-unused-state
    tableSelectedRowKeys: [], // table 选择的数据
    // eslint-disable-next-line react/no-unused-state
    searchFormExpand: true,
    tablePagedList: [],
    tablePagination: {
      current: 1,
      pageSize: 10,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: (total) => `共 ${total} 条`,
    },
    tableSorter: {
      field: '',
      order: '',
    },
    tableLoading: false,
    editCommonModalVisible: false,
  };

  // editFormData = {};

  columns = [
    {
      title: '角色名称',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '角色编码',
      dataIndex: 'code',
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
            onConfirm={() => this.modifyRoleUser(record)}
          >
            <a>删除</a>
          </Popconfirm>
        );
      },
    },
  ];

  handleSearch = (filter) => {
    filter.userId = this.props.formData.id;
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

  handleReset = () => {
    this.setState({
      tableFilter: {
        userId: this.props.formData.id,
      },
    });
  };

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
      pageIndex: pager.current,
      pageSize: pager.pageSize,
      sortBy: sorter.field,
      descending: sorter.order === 'descend',
      filter: this.state.tableFilter,
    };
    this.fetch(query);
  };

  // table 删除
  modifyRoleUser = async (record) => {
    const userId = this.props.formData.id;
    // const roleIds = record.id;
    let roleIds = [];
    roleIds.push(record.id);
    try {
      // eslint-disable-next-line no-undef
      const result = await delRoleForUserId({
        userId,
        roleIds,
      });
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

  //  button 添加角色
  addRole = () => {
    this.editModalFormData = {};
    this.setState({
      editCommonModalVisible: true,
    });
  };

  // button 删除
  batchDelRole = async () => {
    const userId = this.props.formData.id;
    const roleIds = this.state.tableSelectedRowKeys;
    try {
      // eslint-disable-next-line no-undef
      const result = await delRoleForUserId({
        userId,
        roleIds,
      });
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

  // table 选择器
  onSelectChange = (selectedRowKeys) => {
    // console.log('table表格选择器', selectedRowKeys);
    this.setState({ tableSelectedRowKeys: selectedRowKeys });
  };

  refresh = () => {
    console.log('请求某一个用户的角色');
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
    let dataRes = await getRoleFromUserId(query);
    // console.log('用户所属角色编辑', dataRes);
    let data = dataRes.data;
    const pagination = { ...this.state.tablePagination };
    pagination.total = data.totalCount;
    let pagelist = data.rows;
    pagelist.map((item) => {
      return {
        name: item.name,
        code: item.code,
        isAdd: item.isAdd,
      };
    });
    this.setState({
      tableLoading: false,
      tablePagedList: pagelist,
      tablePagination: pagination,
    });
  };

  componentDidMount() {
    this.refresh();
  }

  // editCommonModal 的方法
  editCommonModalOnCancel = () => {
    this.setState({
      editCommonModalVisible: false,
    });
  };

  editCommonModalSaveRoleForUSer = async (data, selectedOptions) => {
    // 请求 添加用户接口
    console.log('U____>>>>>>', data, selectedOptions);
    try {
      // eslint-disable-next-line no-undef
      await addRoleForUser({
        moduleId: data.moduleId,
        userId: this.state.tableFilter.userId,
      });
      this.setState({
        editCommonModalVisible: false,
      });
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: '保存成功',
      });
    } catch (error) {
      notification.error({
        message: error,
      });
    }
    this.refresh();
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
          addFunc={this.addRole}
          onConfirm={this.batchDelRole}
          hasSelected={hasSelected}
          addTitle={'添加角色'}
          removeTitle={'删除角色'}
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
        {/* <Modal visible={this.state.editCommonModalVisible} /> */}

        <CommonModal
          visible={this.state.editCommonModalVisible}
          title={'添加角色'}
          onCancel={this.editCommonModalOnCancel}
          destroyOnClose
          schema={schema.modalSchema}
          uiSchema={schema.modalUiSchema}
          // formData={this.editFormData}
          handFormSubmit={this.editCommonModalSaveRoleForUSer}
        />
      </div>
    );
  }
}
EditUserRoleModalContent.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default EditUserRoleModalContent;
