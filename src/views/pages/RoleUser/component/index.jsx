import React from 'react';
import { Table, Divider, Modal, Tag, Button } from 'antd';
import { getRolePagedList } from '../../../../api';
import schema from '../../../../schema/RoleUser';
import SearchForm from '../../../../schema/SearchForm/SearchForm';
import EditRoleUserModal from './editRoleUserModal';

class RoleUser extends React.Component {
  state = {
    tableFilter: {
      name: '',
      code: '',
    },
    // eslint-disable-next-line react/no-unused-state
    searchFormExpand: true,
    tablePagedList: [],
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
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   width: 320,
    // },
    {
      title: '操作',
      dataIndex: 'id',
      fixed: 'right',
      width: 120,
      render: (text, record) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <a onClick={() => this.editRoleUser(record)}>用户列表</a>
          </div>
        );
      },
    },
  ];

  editFormData = {};

  // SearchForm搜索
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

  // SearchForm重置
  handleReset = () => {
    this.setState({
      tableFilter: {},
    });
  };

  // table onChange事件
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

  // table列表编辑获取数据editFormData
  editRoleUser = (record) => {
    console.log('角色用户组件，用户编辑', record);
    this.editFormData = { ...record };
    this.setState({
      editModalVisible: true,
    });
  };

  editModalOnCancel = () => {
    this.setState({
      editModalVisible: false,
    });
  };

  // 刷新
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
    let dataRes = await getRolePagedList(query);
    let data = dataRes.data;
    const pagination = { ...this.state.tablePagination };
    pagination.total = data.totalCount;
    this.setState({
      tableLoading: false,
      tablePagedList: data.rows,
      tablePagination: pagination,
    });
  };

  componentDidMount() {
    this.refresh();
  }

  render() {
    console.log('RoleUser render');
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
          dataSource={this.state.tablePagedList}
          pagination={this.state.tablePagination}
          loading={this.state.tableLoading}
          onChange={this.handleTableChange}
          scroll={{ x: 1000 }}
          size='small'
          bordered
        />
        <Modal
          visible={this.state.editModalVisible}
          width={1000}
          title={
            <span>
              编辑角色&nbsp;&nbsp;
              <Tag color='#2db7f5'>{this.editFormData.name}</Tag>&nbsp;下用户
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
          <EditRoleUserModal formData={this.editFormData} />
        </Modal>
      </div>
    );
  }
}
export default RoleUser;
