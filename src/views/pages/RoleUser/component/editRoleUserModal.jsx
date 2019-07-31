import React from 'react';
import PropTypes from 'prop-types';
import { Table, Divider, notification, Badge } from 'antd';
import { editRoleUser, getUserPagedList } from '../../../../api';
import SearchForm from '../../../../schema/SearchForm/SearchForm';
import schema from '../../../../schema/User';

class EditRoleUserModalContent extends React.PureComponent {
  state = {
    // SearchForm 查询字段
    tableFilter: {
      name: '',
      email: '',
      roleId: this.props.formData.id,
    },
    // eslint-disable-next-line react/no-unused-state
    searchFormExpand: true,
    tablePagedList: [],
    // 分页器
    tablePagination: {
      // 当前是第几页
      current: 1,
      // 每页数量
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
  };

  columns = [
    {
      title: '账号名称',
      dataIndex: 'userName',
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
      title: '添加状态',
      dataIndex: 'isAdd',
      align: 'center',
      render: (text, record) => {
        return record.isAdd === 1 ? (
          <Badge status='success' />
        ) : (
          <Badge status='error' />
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      align: 'center',
      fixed: 'right',
      width: 120,
      render: (text, record) => {
        return record.isAdd === 1 ? (
          <a
            onClick={() => this.modifyRoleUser(record, 0)}
            style={{ color: '#f5222d' }}
          >
            移除
          </a>
        ) : (
          <a onClick={() => this.modifyRoleUser(record, 1)}>添加</a>
        );
      },
    },
  ];

  // SearchForm 搜索
  handleSearch = (filter) => {
    filter.roleId = this.props.formData.id;
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

  // 搜索重置
  handleReset = () => {
    this.setState({
      tableFilter: {
        roleId: this.props.formData.id,
      },
    });
  };

  // table表格变更
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
      // 当前页数
      pageIndex: pager.current,
      // 每页数量
      pageSize: pager.pageSize,
      // 表单的name
      sortBy: sorter.field,
      // 降序
      descending: sorter.order === 'descend',
      filter: this.state.tableFilter,
    };
    this.fetch(query);
  };

  // 修改角色用户
  modifyRoleUser = async (record, action) => {
    await editRoleUser({
      roleId: this.props.formData.id,
      userId: record.id,
      action,
    });
    if (action === 1) {
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: '添加成功',
      });
    } else {
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: '移除成功',
      });
    }
    this.refresh();
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
    // 获取用户列表
    let dataRes = await getUserPagedList(query);
    console.log('getUserPagedList-宋天恩', dataRes);
    let data = dataRes.data;
    const pagination = { ...this.state.tablePagination };
    pagination.total = data.totalCount;
    let pagelist = data.rows;
    pagelist.map((item) => {
      return {
        userName: item.userName,
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
    return (
      <div>
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
      </div>
    );
  }
}

EditRoleUserModalContent.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default EditRoleUserModalContent;
