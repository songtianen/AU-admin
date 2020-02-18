import React from 'react';
// import { connect } from 'react-redux';
import { Table, Divider, notification, Tag } from 'antd';
import {
  getRolePagedList,
  getAllDepartment,
  delRoles,
  editRole,
  addRole,
} from '../../../../api';
// import {
//   getRolePagedList,
//   delRoles,
//   saveRole,
//   delRole,
// } from '../states/actions';
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
    // eslint-disable-next-line react/no-unused-state
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
    isEditRole: false,
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
      title: '所属部门',
      dataIndex: 'departmentId',
      // eslint-disable-next-line no-unused-vars
      render: (text, redord) => {
        return <Tag color='green'>{this.departmentName(text)}</Tag>;
      },
      sorter: true,
    },
    {
      title: '描述',
      dataIndex: 'description',
      sorter: true,
    },
    {
      title: '操作',
      dataIndex: 'id',
      fixed: 'right',
      width: 120,
      render: (text, record) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <a
              onClick={() => {
                this.editRole(record);
              }}
            >
              编辑
            </a>
          </div>
        );
      },
    },
  ];

  // 模态框 数据组
  editFormData = {};

  departmentList = '';

  departmentName = (id) => {
    const departmentList = this.departmentList.data.rows;
    let name = '';
    departmentList.forEach((item) => {
      if (item.id === id) {
        name = item.name;
      }
    });
    return name;
  };

  fetch = async (query = {}) => {
    this.setState({ tableLoading: true });
    let [ResData, AllDepartment] = await Promise.all([
      getRolePagedList(query),
      getAllDepartment(),
    ]);
    this.departmentList = AllDepartment;
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
      isEditRole: false,
    });
  };

  // button Popconfirm 删除
  batchDelRole = async () => {
    const ids = this.state.tableSelectedRowKeys.map((s) => {
      return s.id;
    });
    const departmentIds = this.state.tableSelectedRowKeys.map((s) => {
      return s.departmentId;
    });
    try {
      await delRoles({
        ids,
        departmentIds,
      });
      this.setState({
        tableSelectedRowKeys: [],
      });
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: '删除成功',
      });
    } catch (e) {
      notification.error({
        message: e,
      });
    }
    this.refresh();
  };

  // table 选择器
  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({ tableSelectedRowKeys: selectedRows });
  };

  // modal
  editModalOnCancel = () => {
    this.setState({
      editModalVisible: false,
    });
  };

  // modal
  commonModalSubmit = async (data) => {
    let formData = { ...this.editFormData, ...data };
    let isEditRole = this.state.isEditRole;
    if (isEditRole) {
      try {
        await editRole(formData);
        this.setState({
          editModalVisible: false,
          isEditRole: false,
        });
        notification.success({
          placement: 'bottomLeft bottomRight',
          message: '保存成功',
        });
      } catch (e) {
        notification.error({
          message: e.msg,
        });
      }
    } else {
      try {
        await addRole(formData);
        this.setState({
          editModalVisible: false,
        });
        notification.success({
          placement: 'bottomLeft bottomRight',
          message: '保存成功',
        });
      } catch (e) {
        notification.error({
          message: e.msg,
        });
      }
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
        departmentId: record.departmentId,
        description: record.description,
      },
    );
    // console.log('fuck-0000', record);
    this.editFormData = { ...obj };
    this.setState({
      editModalVisible: true,
      isEditRole: true,
    });
  };

  // table 表格 分页、排序、筛选变化时触发
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

  render() {
    console.log('Role, render');
    const { tableSelectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys: tableSelectedRowKeys.map((i) => i.id),
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
          handFormSubmit={this.commonModalSubmit}
        />
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   console.log('请求角色列表', state.role.rolePagedList);
//   return {
//     error: state.error,
//     rolePagedList: state.role.rolePagedList,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     delRoles: (data) => {
//       dispatch(delRoles(data));
//     },
//     getRolePagedList: (data) => {
//       dispatch(getRolePagedList(data));
//     },
//     saveRole: (data) => {
//       dispatch(saveRole(data));
//     },
//   };
// };
export default Role;
