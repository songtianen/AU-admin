export default {
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
      { required: true, message: '请输入部门名称' },
      { whitespace: true, message: 'no space' },

      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '部门名称',
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
  code: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入部门编码' },
      { whitespace: true, message: 'no space' },

      { max: 25, message: '最多输入25字符' },
    ], // 校验规则
    'ui:title': '部门编码',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  parentId: {
    'ui:widget': 'treeSelect', // 级联
    'ui:options': {
      // fieldNames: { title: 'name', value: 'id', key: 'id' },
      treeData: [], // 后端传进去的数据
    }, // 组件属性配置

    'ui:rules': [{ required: true, message: '请选择模块!' }], // 校验规则
    'ui:remoteConfig': {
      apiKey: 'getAllDepartmentTree',
      hand: (data) => {
        const changeData = function(params) {
          for (let i = 0; i < params.length; i++) {
            params[i].value = params[i].id;
            params[i].key = params[i].id;
            if (params[i].children) {
              changeData(params[i].children);
            }
          }
          return params;
        };
        const a = changeData(data);

        return a;
      }, // 数据处理函数
    },
    'ui:title': '所属部门', // 未设置取schema 中定义的title
    // "ui:description": "请选择模块",//未设置取 schema 中定义的description
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      // label: '角色', // 未设置取ui:title,
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
};
