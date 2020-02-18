// 也可看作是uiSchema.js 的补充
export default {
  $id: 'roleUser-edit-schema',
  title: 'roleUser-edit-schema',
  description: 'roleUser-edit-schema.',
  type: 'object',
  // required: ['name', 'code'], // 可传给后端判断，暂时不使用此处配置检验前端表单,前端表单校验规则配置在uiSchema
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
      title: '角色名称',
      maxLength: 25, // 可传给后端判断，暂时不使用此处配置检验前端表单,前端表单校验规则配置在uiSchema
      minLength: 1,
    },
    code: {
      type: 'string',
      title: '角色编码',
      maxLength: 25,
      minLength: 1,
    },
  },
};
