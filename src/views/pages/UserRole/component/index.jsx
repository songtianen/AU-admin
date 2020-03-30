import React from 'react';
import { Table, Modal, Tag, Button, Divider } from 'antd';
import { getAllUser, getRolePagedList } from '../../../../api';
import SearchForm from '../../../../schema/Common/SearchForm/SearchForm';
import schema from '../../../../schema/UserRole';
import EditUserRoleModalContent from './editUserRoleModalContent';

class UserRole extends React.PureComponent {
  state = {
    tableFilter: {
      name: '',
      email: '',
    },
    tableSelectedRowKeys: [], // table 选择的数据
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
    editTableVisible: false,
  };

  columns = [
    // {
    //   title: 'isAdmin',
    //   dataIndex: 'isAdmin',
    //   sorter: true,
    // },
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
      width: 140,
    },
    {
      title: '所属角色/职位',
      dataIndex: 'userRole',
      sorter: true,
      render: (text, record) => {
        const data = this.roleName(record.userRole);
        return (
          <span>
            {data.map((i) => {
              return (
                <Tag color='green' key={i}>
                  {i}
                </Tag>
              );
            })}
          </span>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      fixed: 'right',
      width: 140,
      render: (text, record) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <a onClick={() => this.editUserRole(record)}>角色编辑</a>
          </div>
        );
      },
    },
  ];

  editFormData = {};

  roleList = '';

  // eslint-disable-next-line no-unused-vars
  roleName = (data) => {
    let roleList = this.roleList.data.rows;
    let roleArr = [];
    for (let i = 0; i < roleList.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (roleList[i].id === data[j]) {
          if (roleList[i].name) roleArr.push(roleList[i].name);
        }
      }
    }
    // if (roleArr) {
    //   roleArr.map((item) => {
    //     return <Button>/{item}</Button>;
    //   });
    // }
    return roleArr;
  };

  // SearchForm提交
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
    this.editFormData = { ...record };
    this.setState({
      editTableVisible: true,
    });
  };

  // EditUserRoleModalContent组件
  editModalOnCancel = () => {
    this.setState({
      editTableVisible: false,
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
    let [dataRes, roleList] = await Promise.all([
      getAllUser(query),
      getRolePagedList(),
    ]);
    this.roleList = roleList;
    console.log('getRolePagedList', roleList);
    let data = dataRes.data;
    let pagination = { ...this.state.tablePagination };
    pagination.total = data.totalCount;
    let pagelist = data.rows;
    this.setState({
      tableLoading: false,
      tablePagedList: pagelist,
      tablePagination: pagination,
    });
    // console.log('this.state', this.state.tablePagedList);
  };

  // table 选择器
  onSelectChange = (selectedRowKeys) => {
    // console.log('table表格选择器', selectedRowKeys);
    this.setState({ tableSelectedRowKeys: selectedRowKeys });
  };

  componentDidMount() {
    this.refresh();
  }

  render() {
    console.log('UserRole render');
    const { tableSelectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys: tableSelectedRowKeys,
      onChange: this.onSelectChange,
    };
    // const hasSelected = tableSelectedRowKeys.length > 0;
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
          rowSelection={rowSelection}
          columns={this.columns}
          rowKey={(record) => {
            // 指定 table中的key是 record（tablePagedList）中的id
            return record.id;
          }}
          dataSource={this.state.tablePagedList}
          pagination={this.state.tablePagination}
          loading={this.state.tableLoading}
          onChange={this.handleTableChange}
          scroll={{ x: 1000 }}
          size='small'
          bordered
        />
        <Modal
          visible={this.state.editTableVisible}
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
