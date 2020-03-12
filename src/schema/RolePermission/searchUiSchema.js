export default {
  name: {
    'ui:widget': 'input',
    'ui:options': {
      size: 'small',
      type: 'text',
      placeholder: '名称模糊查询',
    },
    'ui:title': '角色名称',
    'ui:description': '',
  },
  code: {
    'ui:widget': 'input',
    'ui:options': {
      size: 'small',
      type: 'text',
      placeholder: '编码模糊查询',
    },
    'ui:title': '角色编码',
    'ui:description': '',
  },
  departmentId: {
    'ui:widget': 'treeSelect', // 级联
    'ui:title': '部门名称',
    'ui:options': {
      size: 'small',
      style: { width: 150 },
      // fieldNames: { title: 'name', value: 'id', key: 'id' },
      treeData: [], // 后端传进去的数据
    }, // 组件属性配置

    // 'ui:rules': [{ required: true, message: '请选择模块!' }], // 校验规则
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
  },
  // 'ui:formItemConfig': {
  //   style: { background: 'red' },
  // },
};
