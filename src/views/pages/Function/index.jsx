import React from 'react';
import { connect } from 'react-redux';
import { notification, Table, Divider, Tag } from 'antd';
import {
  getFunctionPagedList,
  delFunctions,
  saveFunction,
  // getAllMenu,
} from '../../../api';
import SearchForm from '../../../schema/SearchForm/SearchForm';
import CommonModal from '../Common/CommonModal';
import AddRemoveComponent from '../Common/AddRemoveConponent';
import schema from '../../../schema/Function';
import formRemoteDataUtil from '../../../schema/Form/FormRemoteDataUtil';
import util from '../../../util/util';

class Function extends React.PureComponent {
  // style = { display: 'none' };

  state = {
    filter: {
      module: '',
      name: '',
      code: '',
    },
    // eslint-disable-next-line react/no-unused-state
    expand: true,
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
    editModalVisible: false,
  };

  columns = [
    {
      title: '模块名称',
      dataIndex: 'module',
      render: (text) => {
        return <Tag color='green'>{text}</Tag>;
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

  // 请求 列表
  fetch = async (query = {}) => {
    this.setState({ loading: true });
    let dataRes = await getFunctionPagedList(query);
    // console.log('getFunctionPagedList', dataRes);
    let data = dataRes.data;
    const pagination = { ...this.state.pagination };
    pagination.total = data.totalCount;
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
    try {
      await delFunctions({
        ids: JSON.stringify(
          this.state.selectedRowKeys.map((s) => {
            return s;
          }),
        ),
      });
      this.setState({
        selectedRowKeys: [],
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
            if (i.moduleId) {
              i.selectable = false;
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
      editModalVisible: true,
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
        moduleId: record.name,
      },
    );
    this.editFormData = { ...obj };
    this.setState({
      editModalVisible: true,
    });
  };

  // Modal 处理数据 ：此方法传入子组件 commonForm 获取表单数据data
  modalSaveFunctionData = async (data) => {
    // console.log('saveFunction-data', data);
    let formData = { ...this.editFormData, ...data };
    let menuList = formRemoteDataUtil.getData(
      `${schema.editSchema['$id']}_moduleId`,
    );
    formData.moduleId = formData.moduleId[formData.moduleId.length - 1];
    let menu = util.getTreeEleByPropertyValue(
      formData.moduleId,
      'id',
      menuList,
    );
    formData.module = menu.title;
    try {
      await saveFunction(formData);

      this.setState({
        editModalVisible: false,
      });
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: '保存成功',
      });
    } catch (e) {
      notification.error({
        message: e,
      });
    }
    this.refresh();
  };

  // Modal Onok 确认保存 调用子组件handleSubmit，子组件handleSubmit（）调用父组件的saveFunction（），子组件校验表单 并传回 表单数据
  editModalOnOk = () => {
    // 不直接调用saveFunction，是因为form组件内部会先校验表单，通过才会调用通过props传进去的saveFunction
    this.editFunctionForm.commonFormhandleSubmit();
  };

  // Modal Cancel
  editModalOnCancel = () => {
    this.setState({
      editModalVisible: false,
    });
  };

  componentDidMount() {
    this.fetch({
      pageIndex: this.state.pagination.current,
      pageSize: this.state.pagination.pageSize,
      filter: this.state.filter,
    });
  }

  render() {
    console.log('render:Function');
    // console.log('Function editFormData', this.editFormData);
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
          visible={this.state.editModalVisible}
          title={this.editFormData.id ? '编辑' : '新增'}
          onCancel={this.editModalOnCancel}
          destroyOnClose
          schema={schema.editSchema}
          uiSchema={schema.editUiSchema}
          formData={this.editFormData}
          handFormSubmit={this.modalSaveFunctionData}
        />
      </div>
    );
  }
}
const mapStateToPorps = (state) => {
  console.log('app state', state);
  const { accessMenu } = state.app.accessMenu;
  return {
    accessMenu,
  };
};
export default connect(mapStateToPorps)(Function);
