export default {
  $id: 'role-search-schema',
  title: 'role-search-schema',
  description: 'role-search-schema.',
  type: 'object',
  required: [],
  properties: {
    name: {
      type: 'string',
      title: '部门名称',
    },
    code: {
      type: 'string',
      title: '部门编码',
    },
  },
  formLayout: {
    layout: 'inline',
  },
};
