export default {
  name: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入账号名称' },
      { whitespace: true, message: 'no space' },

      { max: 100, message: '最多输入100字符' },
    ], // 校验规则
    'ui:title': '账号名称',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },

  trueName: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
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
      placeholder: '',
    },
    'ui:rules': [
      { type: 'email', message: 'The input is not valid E-mail!' },
      { whitespace: true, message: 'no space' },

      { max: 100, message: '最多输入100字符' },
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
      placeholder: '',
    },
    'ui:rules': [
      { whitespace: true, message: 'no space' },
      { max: 100, message: '最多输入100字符' },
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
};
