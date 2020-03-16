/* eslint-disable no-useless-escape */
export default {
  name: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入功能名称' },
      { max: 100, message: '最多输入100字符' },
      { whitespace: true, message: '输入的文字不能有空格' },
      // eslint-disable-next-line prettier/prettier
    ], // 校验规则
    'ui:title': '功能名称',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    },
    //  // Form.Item 配置
    // 'ui:required': [
    //   {
    //     name: 'name',
    //     message: '请先填写角色名称',
    //   },
    // ],
  },
  code: {
    'ui:widget': 'input',
    'ui:options': {
      type: 'text',
      placeholder: '',
    },
    'ui:rules': [
      { required: true, message: '请输入功能编码' },
      { max: 100, message: '最多输入100字符' },
      { whitespace: true, message: '输入的文字不能有空格' },
    ], // 校验规则
    'ui:title': '功能编码',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  description: {
    'ui:widget': 'input.textarea',
    'ui:options': {
      style: {
        width: 400,
        height: 200,
      },
      autosize: { minRows: 2, maxRows: 6 },
      placeholder: '',
    },
    'ui:rules': [
      { whitespace: true, message: 'no space' },
      { max: 300, message: '最多输入300字符!' },
    ], // 校验规则
    'ui:title': '功能描述',
    'ui:description': '',
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
  moduleId: {
    'ui:widget': 'treeSelect', // 级联
    'ui:options': {
      // fieldNames: { value: 'id', key: '_id' },
      disabled: false,
      treeData: [],
    }, // 组件属性配置
    'ui:rules': [{ required: true, message: '请选择模块!' }], // 校验规则
    'ui:remoteConfig': {
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
              i.title = i.name;
            }
            if (i.children) {
              changeList(i.children);
            }
          }
          return list;
        };
        return changeList(data);
      }, // 数据处理函数
    },
    'ui:title': '模块', // 未设置取schema 中定义的title
    // "ui:description": "请选择模块",//未设置取 schema 中定义的description
    'ui:formItemConfig': {
      hasFeedback: true,
      // "extra":"121212",//未设置取ui:description
      label: '模块', // 未设置取ui:title,
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }, // Form.Item 配置
  },
};
