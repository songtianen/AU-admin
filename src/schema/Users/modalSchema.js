export default {
  $id: 'users-modal-edit-schema',
  title: 'users-modal-edit-schema',
  description: 'users-modal-edit-schema.',
  type: 'object',
  required: [], // 可传给后端判断，暂时不使用此处配置检验前端表单,前端表单校验规则配置在uiSchema
  properties: {
    username: {
      type: 'string',
      title: '用户名称',
    },

    email: {
      type: 'string',
      title: '用户邮箱',
    },
    password: {
      type: 'string',
      title: '用户密码',
    },

    phone: {
      type: 'string',
      title: '电话',
    },
  },
};
