/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
import React from 'react';
import { Table, Divider, notification, Tag } from 'antd';
import { getPostPagedList, savePermission } from '../../../../api';
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
              编辑
            </a>
            <Divider type='vertical' />
          </div>
        );
      },
    },
  ];

  editFormData = {};

  fetch = async (query = {}) => {
    this.setState({ tableLoading: true });
    let dataRes = await getPostPagedList(query);
    let data = dataRes.data;
    const pagination = { ...this.state.tablePagination };
    pagination.total = data.total.count;
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
    return (
      <div>
        this is role songtianen
        <SearchForm
          schema={schema.searchSchema}
          uiSchema={schema.searchUiSchema}
          handleSubmit={this.handleSearch}
          handleReset={this.handleReset}
        />
        <Divider />
      </div>
    );
  }
}

export default RolePermission;
