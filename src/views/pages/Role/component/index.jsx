/* eslint-disable no-script-url */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Table, Popconfirm, Divider, Button, notification } from 'antd';
import { getRolePagedList, delRole, delRoles, saveRole } from '../../../../api';
import SearchForm from '../../../../schema/SearchForm/SearchForm';
import schema from '../../../../schema/Role';
import CommonModal from '../../Common/CommonModal';
import AddRemoveComponent from '../../Common/AddRemoveConponent';

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
              onConfirm={() => this.delRole(record)}
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
    // console.log('query---1', query);
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

  //  button 新增
  addRole = () => {
    this.editFormData = {};
    this.setState({
      editModalVisible: true,
    });
  };

  // button Popconfirm 删除
  batchDelRole = async () => {
    const ids = JSON.stringify(
      this.state.tableSelectedRowKeys.map((s) => {
        return s;
      }),
    );
    // console.log('ids????????', ids);
    try {
      await delRoles({
        ids: JSON.stringify(
          this.state.tableSelectedRowKeys.map((s) => {
            return s;
          }),
        ),
      });
      this.setState({
        tableSelectedRowKeys: [],
      });
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: '删除成功',
      });
    } catch (e) {
      console.log('e', e);
    }
    this.refresh();
  };

  // table 选择器
  onSelectChange = (selectedRowKeys) => {
    // console.log('table表格选择器', selectedRowKeys);
    this.setState({ tableSelectedRowKeys: selectedRowKeys });
  };

  // modal
  editModalOnCancel = () => {
    this.setState({
      editModalVisible: false,
    });
  };

  // modal
  saveRole = async (data) => {
    let formData = { ...this.editFormData, ...data };
    try {
      await saveRole(formData);
      this.setState({
        editModalVisible: false,
      });
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: '保存成功',
      });
    } catch (e) {
      console.log(e);
    }
    this.refresh();
  };

  // table delete Popconfirm
  delRole = async (record) => {
    const { id } = record;
    try {
      await delRole({ id });
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: '删除成功',
      });
    } catch (e) {
      console.log('Role -delRole Err', e);
    }
    this.refresh();
  };

  // table edit Popconfirm
  editRole = (record) => {
    let obj = Object.assign(
      {},
      {
        id: record.id,
        name: record.name,
        code: record.code,
        description: record.description,
      },
    );
    // console.log('fuck-0000', record);
    this.editFormData = { ...obj };
    this.setState({
      editModalVisible: true,
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
      <div style={{ backgroundColor: '#fff', padding: '18px' }}>
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
          addTitle={'新增'}
          removeTitle={'删除'}
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
        <CommonModal
          visible={this.state.editModalVisible}
          title={this.editFormData.id ? '编辑' : '新增'}
          onCancel={this.editModalOnCancel}
          destroyOnClose
          schema={schema.editSchema}
          uiSchema={schema.editUiSchema}
          formData={this.editFormData}
          handFormSubmit={this.saveRole}
        />
      </div>
    );
  }
}

export default Role;
