export default {
  title: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      options: { title: 'songtisnen' },
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入角色编码' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '菜单title',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  name: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
      // onBlur: (e) => {
      //   const value = e.target.value;
      //   // console.log(value);
      // },
    },
    'ui:rules': [
      { required: true, message: '请输入角色名称' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '菜单名称',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
    // 'ui:onBlur': (e) => {
    //   const value = e.target.value;
    //   // console.log(value);
    // },
  },
  functionCode: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入角色编码' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '菜单编码',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  path: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入角色编码' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '菜单路径',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  leftMenu: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入角色编码' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '左侧',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  isLock: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入角色编码' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '锁定',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  parentId: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入角色编码' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '所属菜单',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  icon: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入角色编码' },
      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '图标',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
};
