import React from 'react';
import { notification, Table, Divider, Tag } from 'antd';
import {
  getFunctionPagedList,
  delFunctions,
  addFunction,
  editFunction,
  getAllMenu,
} from '../../../api';
import SearchForm from '../../../schema/Common/SearchForm/SearchForm';
import CommonModal from '../Common/CommonModal';
import AddRemoveComponent from '../Common/AddRemoveConponent';
import schema from '../../../schema/Function';

class Function extends React.PureComponent {
  // style = { display: 'none' };

  state = {
    filter: {
      name: '',
      code: '',
    },
    selectedRowKeys: [],
    pagedList: [],
    // 分页器 配置
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
    loading: false,
    commonModalVisible: false,
    isModalEdit: false,
  };

  columns = [
    {
      title: '模块名称',
      dataIndex: 'module',
      render: (text, record) => {
        return <Tag color='green'>{this.getMoudleName(record.moduleId)}</Tag>;
      },
      sorter: true,
    },
    {
      title: '功能名称',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '功能编码',
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: '操作',
      dataIndex: 'id',
      fixed: 'right',
      width: 120,
      render: (text, record) => {
        /**
         * 生成复杂数据的渲染函数，
         * 参数分别为当前行的值，当前行数据，行索引，
         * @return里面可以设置表格行/列合并
         */
        return (
          <div style={{ textAlign: 'center' }}>
            <a onClick={() => this.editFunction(record)}>编辑</a>
          </div>
        );
      },
    },
  ];

  editFormData = {};

  menuList = '';

  getMoudleName = (id) => {
    let menuList = this.menuList;
    const findName = (data, _id) => {
      for (let i of data) {
        if (i.id === _id) {
          return i.title;
        }
      }
      return '';
    };
    return findName(menuList, id);
  };

  // 请求 列表
  fetch = async (query = {}) => {
    this.setState({ loading: true });
    let [dataRes, menu] = await Promise.all([
      getFunctionPagedList(query),
      getAllMenu(),
    ]);
    // console.log('getFunctionPagedList', dataRes);
    let data = dataRes.data;
    const pagination = { ...this.state.pagination };
    pagination.total = data.totalCount;
    this.menuList = menu.data.rows;
    this.setState({
      loading: false,
      pagedList: data.rows,
      pagination,
    });
  };

  // 刷新
  refresh = () => {
    let query = {
      pageIndex: this.state.pagination.current,
      pageSize: this.state.pagination.pageSize,
      sortBy: this.state.sorter.field,
      descending: this.state.sorter.order === 'descend',
      filter: this.state.filter,
    };
    this.fetch(query);
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
      filter: this.state.filter,
    };
    this.fetch(query);
  };

  //  SearchForm 组件 查询
  handleSearch = (filter) => {
    // 简单clone一个对象
    const pager = { ...this.state.pagination };
    pager.current = 1; // 查询回到第一页
    this.setState({
      filter,
      pagination: pager,
    });
    let query = {
      pageIndex: 1,
      pageSize: this.state.pagination.pageSize,
      sortBy: this.state.sorter.field,
      descending: this.state.sorter.order === 'descend',
      filter,
    };
    this.fetch(query);
  };

  //  SearchForm 组件 重置
  handleReset = () => {
    this.setState({
      filter: {},
    });
  };

  //  table 组件 选中项发生变化时的回调
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };

  // button 按钮删除 气泡确认 确定删除
  batchDelFunction = async () => {
    const { selectedRowKeys } = this.state;
    try {
      await delFunctions({
        ids: selectedRowKeys,
      });
      this.setState({
        selectedRowKeys: [],
        isModalEdit: false,
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

  // buttom 按钮 新增功能
  addFunction = () => {
    this.editFormData = {};
    schema.editUiSchema.moduleId['ui:options'].disabled = false;
    schema.editUiSchema.moduleId['ui:remoteConfig'] = {
      apiKey: 'getAllMenuWithFunction',
      hand: (data) => {
        console.log('FunctionData', data);
        const changeList = (list) => {
          for (let i of list) {
            i.value = i.id;
            i.key = i._id;
            i.selectable = true;
            i.disabled = false;
            if (i.moduleId) {
              i.selectable = false;
              i.disabled = true;
            }
            if (i.children) {
              changeList(i.children);
            }
          }
          return list;
        };
        return changeList(data);
      },
    };
    // 模态框显示
    this.setState({
      commonModalVisible: true,
      isModalEdit: false,
    });
  };

  //  Modal 框编辑功能 table表格编辑时调用
  editFunction = async (record) => {
    schema.editUiSchema.moduleId['ui:options'].disabled = true;
    // 表单不进行网络请求
    schema.editUiSchema.moduleId['ui:remoteConfig'] = '';
    let obj = Object.assign(
      {},
      {
        name: record.name,
        code: record.code,
        description: record.description,
        moduleId: record.moduleId,
        id: record.id,
      },
    );
    this.editFormData = { ...obj };
    this.setState({
      commonModalVisible: true,
      isModalEdit: true,
    });
  };

  // Modal
  modalSubmit = async (data) => {
    let formData = { ...this.editFormData, ...data };
    if (!this.state.isModalEdit) {
      // 编辑接口
      try {
        await addFunction(formData);
        this.setState({
          commonModalVisible: false,
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
      // 新增接口
      try {
        await editFunction(formData);
        this.setState({
          commonModalVisible: false,
          isModalEdit: false,
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

  // Modal Cancel
  modalOnCancel = () => {
    this.setState({
      commonModalVisible: false,
      isModalEdit: false,
    });
  };

  componentDidMount() {
    console.log('Function Did Mount');
    this.refresh();
  }

  render() {
    console.log('render:Function');
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div style={{ backgroundColor: '#fff', padding: '18px' }}>
        <SearchForm
          schema={schema.searchSchema}
          uiSchema={schema.searchUiSchema}
          handleSubmit={this.handleSearch}
          handleReset={this.handleReset}
        />
        <Divider />
        <div style={{ marginBottom: 16 }}>
          <AddRemoveComponent
            addFunc={this.addFunction}
            onConfirm={this.batchDelFunction}
            hasSelected={hasSelected}
            addTitle={'新增'}
            removeTitle={'删除'}
          />
        </div>
        <Table
          rowSelection={rowSelection}
          columns={this.columns}
          rowKey={(record) => record.id}
          dataSource={this.state.pagedList}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
          scroll={{ x: 768 }}
          size='small'
          bordered
        />
        <CommonModal
          visible={this.state.commonModalVisible}
          title={this.editFormData.id ? '编辑' : '新增'}
          onCancel={this.modalOnCancel}
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

export default Function;
