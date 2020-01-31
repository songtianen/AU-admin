export default {
  moduleId: {
    'ui:widget': 'cascader', // 级联
    'ui:options': {
      fieldNames: { label: 'name', value: 'id', children: 'children' },
      options: [],
    }, // 组件属性配置
    'ui:rules': [{ required: true, message: '请选择模块!' }], // 校验规则
    'ui:remoteConfig': {
      apiKey: 'getAllDepartmentAndRole',
      hand: (data) => {
        return data;
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
