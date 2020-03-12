export default {
  $id: 'rolePermission-search-schema',
  title: 'rolePermission-search-schema',
  description: 'rolePermission-search-schema.',
  type: 'object',
  required: [],
  properties: {
    name: {
      type: 'string',
      title: '角色名称',
    },
    code: {
      type: 'string',
      title: '角色编码',
    },
    departmentId: {
      type: 'string',
      title: '部门名称',
    },
  },
  formLayout: {
    layout: 'inline',
  },
};
