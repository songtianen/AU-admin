// 也可看作是uiSchema.js 的补充
export default {
  $id: 'menu-edit-schema',
  title: 'menu-edit-schema',
  description: 'menu-edit-schema.',
  type: 'object',
  required: [], // 可传给后端判断，暂时不使用此处配置检验前端表单,前端表单校验规则配置在uiSchema
  properties: {
    title: {
      type: 'string',
      title: '菜单名称',
      maxLength: 25, // 可传给后端判断，暂时不使用此处配置检验前端表单,前端表单校验规则配置在uiSchema
      minLength: 1,
    },
    functionCode: {
      type: 'string',
      title: '菜单编码',
      maxLength: 25,
      minLength: 1,
    },
  },
};
