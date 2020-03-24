import React from 'react';
// import { connect } from 'react-redux';
import { Table, Divider, notification, Badge, Tag } from 'antd';
import { getAllMenu, editMenu, delMenus, addMenu } from '../../../api';

import SearchForm from '../../../schema/Common/SearchForm/SearchForm';
import schema from '../../../schema/Menu';
import CommonModal from '../Common/CommonModal';
import AddRemoveComponent from '../Common/AddRemoveConponent';

class Menu extends React.PureComponent {
  state = {
    tableFilter: {
      title: '',
      functionCode: '',
    },
    tableSelectedRowKeys: [],
    pagedList: [],
    allList: [],
    // table 分页器
    pagination: {
      current: 1,
      pageSize: 10,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: (total) => `Total ${total} items`,
    },
    sorter: {
      field: '',
      order: '',
    },
    loading: false, // table 加载
    editModalVisible: false, // modal 模态框的 显示
    isEditModal: false,
  };

  columns = [
    {
      title: '菜单title',
      dataIndex: 'title',
      sorter: true,
    },
    {
      title: '菜单名称',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '菜单编码',
      dataIndex: 'functionCode',
      sorter: true,
    },
    {
      title: '菜单路径',
      dataIndex: 'path',
      sorter: true,
    },
    {
      title: '父菜单',
      dataIndex: 'parentId',
      render: (text) => {
        return <Tag color='green'>{this.getParentName(text)}</Tag>;
      },
      width: 140,
      sorter: true,
    },
    {
      title: '图标',
      dataIndex: 'icon',
    },
    {
      title: '左侧菜单',
      dataIndex: 'leftMenu',
      render: (text) => {
        return text ? (
          <div style={{ textAlign: 'center' }}>
            <Badge status='success' />
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Badge status='error' />
          </div>
        );
      },
    },
    {
      title: '是否锁定',
      dataIndex: 'isLock',
      render: (text) => {
        return text ? (
          <div style={{ textAlign: 'center' }}>
            <Badge status='success' />
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Badge status='error' />
          </div>
        );
      },
    },
    {
      title: '排序',
      dataIndex: 'sort',
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

  getParentName = (id) => {
    let pagedList = this.state.allList;
    for (let i of pagedList) {
      if (i.id === id) {
        return i.title;
      }
    }
    return '';
  };

  fetch = async (query = {}) => {
    this.setState({ loading: true });
    let ResData = await getAllMenu(query);
    let data = ResData.data;
    const pagination = { ...this.state.pagination };
    pagination.total = data.totalCount;
    this.setState({
      loading: false,
      pagedList: data.rows,
      allList: data.allList,
      pagination,
    });
  };

  refresh = () => {
    let query = {
      pageIndex: this.state.pagination.current,
      pageSize: this.state.pagination.pageSize,
      sortBy: this.state.sorter.field,
      descending: this.state.sorter.order === 'descend',
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
    const pager = { ...this.state.pagination };
    pager.current = 1;
    this.setState({
      tableFilter: filter,
      pagination: pager,
    });
    let query = {
      pageIndex: 1,
      pageSize: this.state.pagination.pageSize,
      sortBy: this.state.sorter.field,
      descending: this.state.sorter.order === 'descend',
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
      isEditModal: false,
    });
  };

  // button Popconfirm 删除
  batchDelRole = async () => {
    try {
      await delMenus({
        ids: this.state.tableSelectedRowKeys,
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
        message: e.msg,
      });
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
      isEditModal: false,
    });
  };

  // modal
  modalSubmit = async (data) => {
    if (this.state.isEditModal) {
      let formData = { ...data, id: this.editFormData.id };
      try {
        await editMenu(formData);
        this.setState({
          editModalVisible: false,
          isEditModal: false,
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
        await addMenu(data);
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

  // table编辑
  editRole = (record) => {
    let obj = Object.assign(
      {},
      {
        ...record,
        isLock: record.isLock ? '1' : '0',
        leftMenu: record.leftMenu ? '1' : '0',
      },
    );
    this.editFormData = { ...obj };
    this.setState({
      editModalVisible: true,
      isEditModal: true,
    });
  };

  // table 表格 分页、排序、筛选变化时触发
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    pager.pageSize = pagination.pageSize;
    this.setState({
      pagination: pager,
      sorter: {
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
          dataSource={this.state.pagedList}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
          scroll={{ x: 'max-content' }}
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
          handFormSubmit={this.modalSubmit}
        />
      </div>
    );
  }
}
export default Menu;
