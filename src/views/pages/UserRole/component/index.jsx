import React from 'react';
import { Table, Divider, Modal, Tag, Button } from 'antd';
import { getAllUser } from '../../../../api';
import SearchForm from '../../../../schema/SearchForm/SearchForm';
import schema from '../../../../schema/UserRole';
import EditUserRoleModalContent from './editUserRoleModalContent';

class UserRole extends React.PureComponent {
  state = {
    tableFilter: {
      name: '',
      email: '',
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
      title: '账号名称',
      dataIndex: '_userName',
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
    {
      title: '操作',
      dataIndex: 'id',
      fixed: 'right',
      width: 120,
      render: (text, record) => {
        return (
          <div>
            <a onClick={() => this.editUserRole(record)}>角色列表</a>
          </div>
        );
      },
    },
  ];

  editFormData = {};

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

  handleReset = () => {
    this.setState({
      tableFilter: {},
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

  editUserRole = (record) => {
    console.log('编辑用户', record);
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
    const pagination = { ...this.state.tablePagination };
    pagination.total = data.totalCount;
    let pagelist = data.rows;
    pagelist.map((item) => {
      return {
        _userName: item.userName,
        email: item.email,
        phone: item.phone,
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

  render() {
    console.log('UserRole render');
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
          scroll={{ x: 768 }}
          size='small'
          bordered
        />
        <Modal
          visible={this.state.editModalVisible}
          width={1000}
          title={
            <span>
              编辑用户&nbsp;&nbsp;
              <Tag color='#2db7f5'>{this.editFormData.userName}</Tag>
              &nbsp;所属角色
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
          <EditUserRoleModalContent formData={this.editFormData} />
        </Modal>
      </div>
    );
  }
}

export default UserRole;
