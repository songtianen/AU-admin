import util from '../../util/util';

export default {
  userName: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '用户名',
    },
    'ui:rules': [
      { required: true, message: '请输入用户名称' },
      { whitespace: true, message: 'no space' },

      { max: 100, message: '最多输入100字符' },
    ], // 校验规则
    'ui:title': '用户名称',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },

  email: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '邮箱',
    },
    'ui:rules': [
      { required: true, message: '请输入邮箱' },
      { type: 'email', message: '请输入正确的邮箱格式!' },
    ], // 校验规则
    'ui:title': '用户邮箱',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },

  phone: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '电话',
    },
    'ui:rules': [
      {
        required: true,
        message: '请输入电话号码',
      },
      {
        type: 'string',
        pattern: /^1[3|4|5|7|8]\d{9}$/,
        message: '请输入正确的手机格式',
      },
    ], // 校验规则
    'ui:title': 'phone',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  pwd: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '请输入密码',
    },
    'ui:rules': [
      { required: true, message: '请输入密码' },
      { whitespace: true, message: 'no space' },

      { max: 100, message: '最多输入100字符' },
    ], // 校验规则
    'ui:title': '密码设置',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  userRole: {
    'ui:widget': 'treeSelect', // 级联
    'ui:options': {
      fieldNames: { label: 'name', value: 'id', children: 'children' },
      treeData: [],
      multiple: true,
    }, // 组件属性配置
    'ui:rules': [{ required: true, message: '请选择模块!' }], // 校验规则
    'ui:remoteConfig': {
      apiKey: 'getAllDepartmentAndRole',
      hand: (data) => {
        const tree = util.deparmentTreeWithRole(data);
        return tree;
      }, // 数据处理函数
    },
    'ui:title': '角色', // 未设置取schema 中定义的title
    // "ui:description": "请选择模块",//未设置取 schema 中定义的description
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      label: '角色', // 未设置取ui:title,
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
};
