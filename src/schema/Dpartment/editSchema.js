// 也可看作是uiSchema.js 的补充
export default {
  $id: 'department-add-schema',
  title: 'department-add-schema',
  description: 'department-add-schema',
  type: 'object',
  required: ['name', 'code'], // 可传给后端判断，暂时不使用此处配置检验前端表单,前端表单校验规则配置在uiSchema
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
      title: '部门名称',
      maxLength: 25, // 可传给后端判断，暂时不使用此处配置检验前端表单,前端表单校验规则配置在uiSchema
      minLength: 1,
    },
    code: {
      type: 'string',
      title: '部门编码',
      maxLength: 25,
      minLength: 1,
    },
    parentId: {
      type: 'string',
      // title: '用户名称',
    },
  },
};
