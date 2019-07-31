// 角色权限管理

/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
import React from 'react';
import { Table, Divider, notification, Tag } from 'antd';
import { getRolePagedList, savePermission } from '../../../../api';
import schema from '../../../../schema/Role';
import SearchForm from '../../../../schema/SearchForm/SearchForm';
import EditRolePermissionModal from './editRolePermissionModal';

class RolePermission extends React.PureComponent {
  state = {
    tableFilter: {
      name: '',
      code: '',
    },
    searchFormExpand: true,
    tableSelectedRowKeys: [],
    tablePageList: [],
    tablePagination: {
      current: 1,
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
    editModalVisible: false,
  };

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
    {
      title: '操作',
      dataIndex: 'id',
      fixed: 'right',
      width: 120,
      render: (text, record) => {
        return (
          <div>
            <a
              href='javascript:;'
              onClick={() => {
                this.editRolePermission(record);
              }}
            >
              编辑角色权限
            </a>
          </div>
        );
      },
    },
  ];

  editFormData = {};

  fetch = async (query = {}) => {
    this.setState({ tableLoading: true });
    let dataRes = await getRolePagedList(query);
    let data = dataRes.data;
    const pagination = { ...this.state.tablePagination };
    pagination.total = data.totalCount;
    this.setState({
      tableLoading: false,
      tablePageList: data.rows,
      tablePagination: pagination,
    });
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

  componentDidMount() {
    this.refresh();
  }

  /**
   * @description 查询
   */
  handleSearch = (filter) => {
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
    // console.log('query---1', query);
    this.fetch(query);
  };

  /**
   * @descrition 重置查询
   */
  handleReset = () => {
    this.setState({
      tableFilter: {},
    });
  };

  /**
   * @description 编辑角色权限
   */
  editRolePermission = (record) => {
    this.editFormData = { ...record };
    // console.log('$%%%%%%', this.editFormData);
    this.setState({
      editModalVisible: true,
    });
  };

  /**
   * @description ModalCancel
   */
  editModalOnCancel = () => {
    this.setState({
      editModalVisible: false,
    });
  };

  /**
   * @description modal提交 角色权限
   */
  saveRolePermission = async (data) => {
    let formData = { ...data };
    // console.log('角色权限管理，组件提交角色权限', formData);
    try {
      await savePermission(formData);
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: '保存成功',
      });
      this.setState({
        editModalVisible: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log('RolePermission render');
    return (
      <div style={{ backgroundColor: '#fff', padding: '18px' }}>
        <SearchForm
          schema={schema.searchSchema}
          uiSchema={schema.searchUiSchema}
          handleSubmit={this.handleSearch}
          handleReset={this.handleReset}
        />
        <Divider />
        <Table
          columns={this.columns}
          rowKey={(record) => record.id}
          dataSource={this.state.tablePageList}
          pagination={this.state.tablePagination}
          loading={this.state.tableLoading}
          onChange={this.handleTableChange}
          scroll={{ x: 768 }}
          size='small'
          bordered
        />
        <EditRolePermissionModal
          visible={this.state.editModalVisible}
          title={
            <span>
              编辑角色&nbsp;&nbsp;
              <Tag color='#2db7f5'>{this.editFormData.name}</Tag>&nbsp;权限
            </span>
          }
          onCancel={this.editModalOnCancel}
          formData={this.editFormData}
          handFromSubmit={this.saveRolePermission}
        />
      </div>
    );
  }
}

export default RolePermission;
