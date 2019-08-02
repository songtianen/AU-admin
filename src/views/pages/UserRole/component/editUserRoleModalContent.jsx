import React from 'react';
import PropTypes from 'prop-types';
import { Table, Divider, notification, Badge } from 'antd';
import { editRoleUser, getRolePagedList } from '../../../../api';
import SearchForm from '../../../../schema/SearchForm/SearchForm';
import schema from '../../../../schema/Role';

class EditUserRoleModalContent extends React.PureComponent {
  state = {
    tableFilter: {
      name: '',
      code: '',
      userId: this.props.formData.id,
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

  handleSearch = (filter) => {
    filter.userId = this.props.formData.id;
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
      tableFilter: {
        userId: this.props.formData.id,
      },
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

  modifyRoleUser = async (record, action) => {
    await editRoleUser({
      userId: this.props.formData.id,
      roleId: record.id,
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
    let dataRes = await getRolePagedList(query);
    console.log('用户所属角色编辑', dataRes);
    let data = dataRes.data;
    const pagination = { ...this.state.tablePagination };
    pagination.total = data.totalCount;
    let pagelist = data.rows;
    pagelist.map((item) => {
      return {
        name: item.name,
        code: item.code,
        isAdd: item.isAdd,
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
          bordered
        />
      </div>
    );
  }
}
EditUserRoleModalContent.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default EditUserRoleModalContent;
