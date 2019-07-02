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
                this.editRole(record);
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
      pagIndex: 1,
      pageSize: this.state.tablePagination.pageSize,
      sortBy: this.state.tableSorter.field,
      descending: this.state.tableSorter.order === 'descend',
      filter,
    };
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

  render() {
    console.log('RolePermission render');
    // const data = [
    //   {
    //     _id: '5cec003f57278379c4d8c9e2',
    //     code: 'role_website_admin',
    //     name: '管理员账号',
    //     description: '',
    //     id: '5e86c043-7811-49a1-88e6-946c465c797a',
    //     __v: 0,
    //   },
    //   {
    //     _id: '5cec136e3d04787ddb561f09',
    //     code: 'role_test',
    //     name: '测试账号',
    //     description: '',
    //     id: '41f5af5f-8326-4bc7-be43-45ea9311f3c4',
    //     __v: 0,
    //   },
    // ];
    return (
      <div style={{ backgroundColor: '#fff', padding: '18px' }}>
        this is role songtianen
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
      </div>
    );
  }
}

export default RolePermission;
