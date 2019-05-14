// 不需要后台返回的菜单
export default [
  {
    name: 'example',
    title: '例子',
    leftMenu: true,
    children: [
      {
        name: 'permission_test',
        title: '权限测试页',
        icon: 'key',
        leftMenu: true,
      },
      {
        name: 'error',
        title: '错误页面',
        icon: 'warning',
        leftMenu: true,
        children: [
          {
            name: 'error_404',
            title: '404',
            icon: 'file-unknown',
            leftMenu: true,
          },
          {
            name: 'error_403',
            title: '403',
            icon: 'lock',
            leftMenu: true,
          },
        ],
      },
      {
        name: 'form',
        title: 'JSON表单',
        icon: 'form',
        leftMenu: true,
        children: [
          {
            name: 'search_form',
            title: 'Search Form',
            icon: 'search',
            leftMenu: true,
          },
          {
            name: 'common_form',
            title: 'Common Form',
            icon: 'edit',
            leftMenu: true,
          },
          {
            name: 'dynamic_form',
            title: 'Dynamic Form',
            icon: 'credit-card',
            leftMenu: true,
          },
        ],
      },
    ],
  },
];
