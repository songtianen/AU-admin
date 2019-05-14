/* eslint-disable react/no-unused-state */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { notification, Table, Popconfirm, Divider, Button, Modal } from 'antd';
import {
  getFunctionPagedList,
  delFunction,
  delFunctions,
  saveFunction,
} from '../../../api';
import SearchForm from '../../../schema/SeatchForm/SearchForm';
import CommonForm from '../../../schema/Common/CommonForm';
import schema from '../../../schema/Function';
import PermissionContainer from '../../common/permission';
// 缓存远程表单选项数据，key为对应schema $id+'_'+字段名
import formRemoteDataUtil from '../../../schema/Form/FormRemoteDataUtil';
import util from '../../../util/util';

const style = { display: 'none' };

class Function extends React.PureComponent {
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
          <div>
            <a onClick={() => this.editFunction(record)}>编辑</a>
            <Divider type='vertical' />
            <Popconfirm
              title='确定删除?'
              onConfirm={() => this.delFunction(record.id)}
            >
              <a>删除</a>
            </Popconfirm>
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
    console.log(
      'Function  table 表格 分页、排序、筛选变化时触发 pagination----',
      pagination,
    );
    console.log(
      'Function  table 表格 分页、排序、筛选变化时触发 filters----',
      filters,
    );
    console.log(
      'Function  table 表格 分页、排序、筛选变化时触发 sorter----',
      sorter,
    );
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

  //  table 组件 删除一条
  delFunction = async (id) => {
    try {
      await delFunction({ id });
      notification.success({
        placement: 'bottomLeft bottomRight',
        message: '删除成功',
      });
    } catch (e) {
      console.log('delFunction', e);
    }
    this.refresh();
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
      console.log('delFunctions', e);
    }
    this.refresh();
  };

  // buttom 按钮 新增功能
  addFunction = () => {
    this.editFormData = {};
    // 模态框显示
    this.setState({
      editModalVisible: true,
    });
  };

  //  Modal 框编辑功能 table表格编辑时调用
  editFunction = (record) => {
    // 使用缓存的 menuList
    let menuList = formRemoteDataUtil.getData(
      `${schema.editSchema['$id']}_moduleId`,
    );
    let openMenuList = util.openTreeData(menuList);
    console.log(
      'let openMenuList = util.openTreeData(menuList);',
      openMenuList,
    );
    let menuWithParent = util.getTreeEleWithParent(
      record.moduleId,
      openMenuList,
    );
    console.log(
      'let menuWithParent = util.getTreeEleWithParent(record.moduleId, openMenuList);',
      record.moduleId,
      menuWithParent,
    );
    let moduleId = menuWithParent.map((s) => s.id);
    this.editFormData = { ...record, moduleId };
    console.log('editFormData///-', this.editFormData);

    this.setState({
      editModalVisible: true,
    });
  };

  // Modal 保存 ：此方法传入子组件 commonForm 获取表单数据data
  saveFunction = async (data) => {
    console.log('saveFunction-data', data);
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
      console.log('saveFunction', e);
    }
    this.refresh();
  };

  // Modal Onok 确认保存 调用子组件handleSubmit，子组件handleSubmit（）调用父组件的saveFunction（），子组件校验表单 并传回 表单数据
  editModalOnOk = () => {
    // 不直接调用saveFunction，是因为form组件内部会先校验表单，通过才会调用通过props传进去的saveFunction
    this.editFunctionForm.handleSubmit();
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
    console.log('Function render');
    console.log('Function editFormData', this.editFormData);
    console.log('Function saveFunction', this.saveFunction);

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
          {/* 权限验证 */}
          <PermissionContainer permission={['function_edit']}>
            <Button
              type='primary'
              icon='plus-square-o'
              onClick={this.addFunction}
            >
              新增
            </Button>
          </PermissionContainer>
          <Divider type='vertical' />
          <PermissionContainer permission={['function_del']}>
            <Popconfirm title='确定删除?' onConfirm={this.batchDelFunction}>
              <Button type='danger' disabled={!hasSelected} icon='delete'>
                删除
              </Button>
            </Popconfirm>
          </PermissionContainer>
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
        <Modal
          visible={this.state.editModalVisible}
          cancelText='关闭'
          okText='提交'
          title={this.editFormData.id ? '编辑功能' : '新增功能'}
          onCancel={this.editModalOnCancel}
          onOk={this.editModalOnOk}
          destroyOnClose
        >
          <CommonForm
            ref={(instance) => {
              this.editFunctionForm = instance;
            }}
            schema={schema.editSchema}
            uiSchema={schema.editUiSchema}
            formData={this.editFormData}
            handleSubmit={this.saveFunction}
          />
        </Modal>
        {/* 隐藏组件,做数据初始化,style不先定义每次父组件render都会跟着render */}
        <CommonForm
          schema={schema.editSchema}
          uiSchema={schema.editUiSchema}
          style={style}
        />
      </div>
    );
  }
}
export default Function;
