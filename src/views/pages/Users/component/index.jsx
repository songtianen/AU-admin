import React from 'react';
import { Table, Divider, notification, Tag } from 'antd';
import {
  getAllUser,
  saveUser,
  delUsers,
  editUserInfo,
  getRolePagedList,
  getAllDepartment,
} from '../../../../api';
import SearchForm from '../../../../schema/SearchForm/SearchForm';
import schema from '../../../../schema/UserRole';
import AddRemoveComponent from '../../Common/AddRemoveConponent';
import CommonModal from '../../Common/CommonModal';

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
    editCommonModalVisible: false,
    isAddUser: false,
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
      title: '职位',
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
      title: '所在部门',
      dataIndex: 'department',
      sorter: true,
      render: (text, record) => {
        const data = this.deparmentName(record.userRole);
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
            <a
              onClick={() => {
                this.editUser(record);
              }}
            >
              编辑
            </a>
          </div>
        );
      },
    },
  ];

  editFormData = {};

  roleList = '';

  department = '';

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

  deparmentName = (data) => {
    // 1 传入userRole id，->传入 roleList ->找到role中的 department
    let roleList = this.roleList.data.rows;
    let departmentList = this.department.data.rows;
    let roleDepartmentIdArr = [];
    let depatmentName = [];

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < roleList.length; j++) {
        if (data[i] === roleList[j].id) {
          roleDepartmentIdArr.push(roleList[j].departmentId);
        }
      }
    }
    if (roleDepartmentIdArr) {
      for (let i = 0; i < roleDepartmentIdArr.length; i++) {
        for (let j = 0; j < departmentList.length; j++) {
          if (roleDepartmentIdArr[i] === departmentList[j].id) {
            depatmentName.push(departmentList[j].title);
          }
        }
      }
    }

    return depatmentName;
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

  //  button 新增
  addUser = () => {
    this.editFormData = {};
    this.setState({
      editCommonModalVisible: true,
      isAddUser: true,
    });
  };

  // button Popconfirm 删除
  batchDelUser = async () => {
    const ids = JSON.stringify(
      this.state.tableSelectedRowKeys.map((s) => {
        return s;
      }),
    );
    // console.log('ids????????', ids);
    try {
      const result = await delUsers({
        ids,
      });
      console.log('resulr-=====', result);
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

  // editCommonModal 的方法
  editCommonModalOnCancel = () => {
    this.setState({
      isAddUser: false,
      editCommonModalVisible: false,
    });
  };

  // table edit Popconfirm
  editUser = (record) => {
    this.editFormData = { ...record };
    this.setState({
      editCommonModalVisible: true,
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
    let [dataRes, roleList, department] = await Promise.all([
      getAllUser(query),
      getRolePagedList(),
      getAllDepartment(),
    ]);
    this.roleList = roleList;
    this.department = department;
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

  // saveUser
  editCommonModalSaveUser = async (data) => {
    // 请求 添加用户接口
    if (this.state.isAddUser) {
      try {
        await saveUser({ ...data });
        this.setState({
          isAddUser: false,
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
    } else {
      try {
        const id = this.editFormData.id;
        const result = await editUserInfo({ id, ...data });
        this.setState({
          editCommonModalVisible: false,
        });
        notification.success({
          placement: 'bottomLeft bottomRight',
          message: result.msg,
        });
      } catch (error) {
        notification.error({
          message: error,
        });
      }
    }

    this.refresh();
  };

  render() {
    console.log('UserRole render');
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
          addFunc={this.addUser}
          onConfirm={this.batchDelUser}
          hasSelected={hasSelected}
          addTitle={'新增用户'}
          removeTitle={'删除用户'}
        />
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
        <CommonModal
          visible={this.state.editCommonModalVisible}
          title={'新增用户'}
          onCancel={this.editCommonModalOnCancel}
          destroyOnClose
          schema={schema.modalSchema}
          uiSchema={schema.modalUiSchema}
          formData={this.editFormData}
          handFormSubmit={this.editCommonModalSaveUser}
        />
      </div>
    );
  }
}

export default UserRole;
