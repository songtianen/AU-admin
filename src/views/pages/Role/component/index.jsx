/* eslint-disable no-script-url */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Table, Popconfirm, Divider, Button, notification } from 'antd';
import { getRolePagedList, delRole, delRoles, saveRole } from '../../../../api';
import SearchForm from '../../../../schema/SearchForm/SearchForm';
import schema from '../../../../schema/Role';
import EditRoleModal from './editRoleModal';
// import EditRoleModal from './editRoleModal';

class Role extends React.PureComponent {
  state = {
    tableFilter: {
      name: '',
      code: '',
    },
    searchFormExpand: true,
    tableSelectedRowKeys: [], // table 选择的数据
    tablePagedList: [], // table 展示的数据
    // table 分页器
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
    tableLoading: false, // table 加载
    editModalVisible: false, // modal 模态框的 显示
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
              编辑
            </a>
            <Divider type='vertical' />
            <Popconfirm
              title='确定删除?'
              onConfirm={() => this.editRole(record)}
            >
              <a href='javascript:;'>删除</a>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  // 模态框 数据组
  editFormData = {};

  fetch = async (query = {}) => {
    this.setState({ tableLoading: true });
    let ResData = await getRolePagedList(query);
    let data = ResData.data;

    const pagination = { ...this.state.tablePagination };
    pagination.total = data.totalCount;
    this.setState({
      tableLoading: false,
      tablePagedList: data.rows,
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
    this.fetch(query);
  };

  /**
   * @description 重置查询
   */
  handleReset = () => {
    this.setState({
      tableFilter: {},
    });
  };

  render() {
    console.log('Role, render');
    const { tableSelectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys: tableSelectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = tableSelectedRowKeys.length > 0;
    return (
      <div>
        this is role
        <SearchForm
          schema={schema.searchSchema}
          uiSchema={schema.searchUiSchema}
          handleSubmit={this.handleSearch}
          handleReset={this.handleReset}
        />
        <Divider />
        <div style={{ marginBottom: 16 }}>
          <Button type='primary' icon='plus-square-o' onClick={this.addRole}>
            新增
          </Button>
          <Divider type='vertical' />
          <Popconfirm title='确定删除?' onConfirm={this.batchDelRole}>
            <Button type='danger' disabled={!hasSelected} icon='delete'>
              删除
            </Button>
          </Popconfirm>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={this.columns}
          rowKey={(record) => record.id}
          dataSource={this.state.tablePagedList}
          pagination={this.state.tablePagination}
          loading={this.state.tableLoading}
          onChange={this.handleTableChange}
          scroll={{ x: 768 }}
          bordered
        />
        <EditRoleModal
          visible={this.state.editModalVisible}
          title={this.editFormData.id ? '编辑' : '新增'}
          onCancel={this.editModalOnCancel}
          destroyOnClose
          schema={schema.editSchema}
          uiSchema={schema.editUiSchema}
          formFata={this.editFormData}
          handFormSubmit={this.saveRole}
        />
      </div>
    );
  }
}

export default Role;
