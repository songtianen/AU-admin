const dbConfig = {
  user: [
    {
      id: 1,
      name: 'admin',
      password: '123',
      email: '123@qq.com',
      phone: '18290024784',
      trueName: '张三',
      __index: 0
    },
    {
      name: 'test',
      trueName: '测试',
      password: '123456',
      id: '54a3488f-3c94-489e-bcd0-3f2631991f5e'
    },
    {
      name: 'website_admin',
      trueName: '网站模块管理员A',
      password: '123456',
      id: '92e6b921-d820-4ea6-9b57-95b1378c961e'
    }
  ],
  admin: [
    1
  ],
  token: [],
  menu: [
    {
      id: '1',
      parentId: '0',
      path: '',
      icon: 'mobile',
      title: '网站',
      name: '网站',
      leftMenu: true,
      functionCode: '',
      isLock: false,
      sort: '2'
    },
    {
      id: '4',
      parentId: '0',
      path: '',
      icon: 'appstore',
      title: '系统',
      name: '系统',
      leftMenu: true,
      functionCode: '',
      sort: '1'
    },
    {
      id: '17',
      parentId: '0',
      path: '/',
      name: 'otherRouter',
      leftMenu: false,
      icon: 'video-camera',
      functionCode: '',
      title: '首页'
    },
    {
      id: '21',
      parentId: '0',
      title: '开发',
      name: '开发',
      icon: 'paper-clip',
      leftMenu: true,
      sort: '3'
    },
    {
      id: '2',
      parentId: '1',
      path: '/cms',
      icon: 'pie-chart',
      title: 'CMS',
      name: 'CMS',
      leftMenu: true,
      functionCode: ''
    },
    {
      id: '3',
      parentId: '2',
      path: 'article',
      icon: 'file-word',
      title: '文章管理',
      name: 'article',
      leftMenu: true,
      functionCode: 'article_view',
      sort: '2',
      isLock: false
    },
    {
      id: '5',
      parentId: '4',
      path: '/system',
      icon: 'setting',
      title: '系统设置',
      name: '系统设置',
      leftMenu: true,
      functionCode: ''
    },
    {
      id: '6',
      parentId: '5',
      path: 'menu',
      icon: 'chrome',
      title: '菜单管理',
      name: 'menu',
      leftMenu: true,
      functionCode: 'menu_view',
      isLock: true
    },
    {
      id: '7',
      parentId: '4',
      path: '/permission',
      icon: 'key',
      title: '权限管理',
      name: '权限管理',
      leftMenu: true,
      functionCode: ''
    },
    {
      id: '8',
      parentId: '7',
      path: 'function',
      icon: 'solution',
      title: '功能管理',
      name: 'function',
      leftMenu: true,
      functionCode: 'function_view'
    },
    {
      id: '20',
      parentId: '7',
      path: 'role',
      icon: 'idcard',
      title: '角色管理',
      name: 'role',
      leftMenu: true,
      functionCode: 'role_view'
    },
    {
      id: '9',
      parentId: '7',
      path: 'rolepermission',
      icon: 'calculator',
      title: '角色权限管理',
      name: 'rolepermission',
      leftMenu: true,
      functionCode: 'role_permission_view'
    },
    {
      id: '10',
      parentId: '7',
      path: 'roleuser',
      icon: 'android',
      title: '角色用户管理',
      name: 'roleuser',
      leftMenu: true,
      functionCode: 'role_user_view'
    },
    {
      id: '11',
      parentId: '7',
      path: 'userrole',
      icon: 'dropbox',
      title: '用户角色管理',
      name: 'userrole',
      leftMenu: true,
      functionCode: 'user_role_view'
    },
    {
      id: '12',
      parentId: '4',
      path: '/organization',
      icon: 'usergroup-add',
      title: '组织架构',
      name: '组织架构',
      leftMenu: true,
      functionCode: ''
    },
    {
      id: '13',
      parentId: '12',
      path: 'department',
      icon: 'slack-square',
      title: '部门管理',
      name: 'department',
      leftMenu: true,
      functionCode: 'department_view'
    },
    {
      id: '14',
      parentId: '12',
      path: 'position',
      icon: 'instagram',
      title: '职位管理',
      name: 'position',
      leftMenu: true,
      functionCode: 'position_view'
    },
    {
      id: '15',
      parentId: '4',
      path: '/user',
      icon: 'user-add',
      title: '用户管理',
      name: '用户管理',
      leftMenu: true,
      functionCode: ''
    },
    {
      id: '16',
      parentId: '15',
      path: 'index',
      icon: 'twitter',
      title: '用户管理',
      name: 'user_index',
      leftMenu: true,
      functionCode: 'user_view'
    },
    {
      id: '18',
      parentId: '17',
      path: 'home',
      title: '首页',
      name: 'home_index',
      icon: 'hourglass',
      functionCode: ''
    },
    {
      id: '19',
      parentId: '17',
      path: 'userinfo',
      title: '个人中心',
      name: 'userinfo',
      icon: 'right-square-o',
      functionCode: ''
    },
    {
      id: '30',
      parentId: '21',
      title: '官方组件',
      name: 'official',
      icon: 'ant-design',
      leftMenu: true,
      sort: '1'
    },
    {
      id: '40',
      parentId: '21',
      title: '业务组件',
      name: 'business',
      icon: 'bulb',
      leftMenu: true,
      sort: '2'
    },
    {
      id: '50',
      parentId: '30',
      title: 'Buttons',
      name: 'buttons',
      icon: 'up-square',
      leftMenu: true,
      sort: '1'
    },
    {
      id: '71',
      parentId: '40',
      title: 'sku',
      name: 'sku',
      icon: 'clock-circle',
      leftMenu: true,
      sort: '1'
    },
    {
      id: '72',
      parentId: '50',
      title: 'Button',
      name: 'button',
      icon: 'right-circle-o',
      leftMenu: true,
      sort: '1'
    },
    {
      id: '73',
      parentId: '50',
      title: 'Button-Group',
      name: 'button-group',
      leftMenu: true,
      sort: '2',
      icon: 'retweet'
    },
    {
      id: '77',
      parentId: '50',
      title: 'Dropdown Button',
      name: 'dropdown-button',
      icon: 'arrow-up',
      leftMenu: true,
      isLock: false,
      sort: '3'
    },
    {
      id: '60',
      parentId: '30',
      title: 'Navigation',
      name: 'navigation',
      icon: 'arrows-alt',
      leftMenu: true,
      sort: '2'
    },
    {
      id: '74',
      parentId: '60',
      title: 'Toolbar',
      name: 'toolbar',
      leftMenu: true,
      sort: '1',
      icon: 'minus-circle'
    },
    {
      id: '75',
      parentId: '17',
      title: '审计日志',
      name: 'requestlog',
      icon: 'form'
    },
    {
      id: '76',
      parentId: '3',
      title: '文章编辑',
      name: 'post_edit',
      icon: 'card_giftcard',
      leftMenu: false,
      functionCode: 'post_edit'
    }
  ],
  function: [
    {
      name: '2-文章编辑',
      code: 'post_edit',
      description: '文章编辑',
      moduleId: 3,
      module: '文章管理',
      id: '2817154d-2df0-4875-ac26-5c3dd27061ad',
      __index: 1
    },
    {
      name: '1-文章列表',
      moduleId: 3,
      module: '文章管理',
      code: 'post_view',
      description: '文章列表',
      id: '17684882-c610-4007-b357-e783631c059f',
      __index: 0
    },
    {
      name: '3-文章删除',
      code: 'post_del',
      description: '文章删除',
      moduleId: 3,
      module: '文章管理',
      id: '8ab3b7b6-921a-4f8f-9bad-2fd106c870e1',
      __index: 2
    },
    {
      name: '1-菜单列表',
      code: 'menu_view',
      description: '查看菜单列表',
      moduleId: 6,
      module: '菜单管理',
      id: '6f3ef7c1-53fb-47b6-8800-0adff147c295'
    },
    {
      name: '2-菜单编辑',
      code: 'menu_edit',
      description: '菜单编辑',
      moduleId: 6,
      module: '菜单管理',
      id: 'f8297890-5a35-4704-b901-6b25074beb43'
    },
    {
      name: '1-功能列表',
      code: 'function_view',
      description: '查看功能列表',
      moduleId: 8,
      module: '功能管理',
      id: '2e1109e4-6963-42d4-9a03-6c9c445ac616'
    },
    {
      name: '2-功能编辑',
      code: 'function_edit',
      moduleId: 8,
      module: '功能管理',
      id: 'b49dd81d-0561-43dc-b3fb-1e9fe4262ecd',
      __index: 1
    },
    {
      name: '3-功能删除',
      code: 'function_del',
      moduleId: 8,
      module: '功能管理',
      id: '77562a51-1164-4a59-8599-ae01a6a16dd8'
    },
    {
      name: '1-角色列表',
      code: 'role_view',
      moduleId: 20,
      module: '角色管理',
      id: '2de3ee27-a382-4bbb-8c8f-fa6f73c99d1d'
    },
    {
      name: '2-角色编辑',
      code: 'role_edit',
      moduleId: 20,
      module: '角色管理',
      id: '1ced4e95-8e7c-483a-81e0-0bd305270e44'
    },
    {
      name: '3-角色删除',
      code: 'role_del',
      moduleId: 20,
      module: '角色管理',
      id: 'e7da5956-c711-437e-816e-7854ae0aa19e'
    },
    {
      moduleId: 9,
      module: '角色权限管理',
      name: '1-角色权限列表',
      code: 'role_permission_view',
      id: '3e4b4aae-4b83-427d-b241-d18eb9429996',
      __index: 1
    },
    {
      name: '2-角色权限编辑',
      code: 'role_permission_edit',
      moduleId: 9,
      module: '角色权限管理',
      id: 'a5dcc97d-ad44-4a8d-b669-3d3fbefd5332',
      __index: 2
    },
    {
      name: '1-角色用户列表',
      code: 'role_user_view',
      moduleId: 10,
      module: '角色用户管理',
      id: '45dbaa22-90ad-47ba-b773-6bc9901b18d5',
      __index: 1
    },
    {
      name: '2-角色用户编辑',
      code: 'role_user_edit',
      moduleId: 10,
      module: '角色用户管理',
      id: '3ccac00a-94e1-48b8-bd53-0d1acf8bfd89',
      __index: 2
    },
    {
      name: '1-用户角色列表',
      code: 'user_role_view',
      moduleId: 11,
      module: '用户角色管理',
      id: '67b20c33-7e0f-4bd7-b60f-c1468bb87ee1'
    },
    {
      name: '2-用户角色编辑',
      code: 'user_role_edit',
      moduleId: 11,
      module: '用户角色管理',
      id: '869d84a5-8b4b-4ea9-90cb-eaefc5e11f96',
      __index: 7
    },
    {
      name: '1-用户列表',
      code: 'user_view',
      moduleId: 16,
      module: '用户管理',
      id: '34a10659-efd2-4ef8-b2cd-df0cb2269726'
    },
    {
      name: '2-用户编辑',
      code: 'user_edit',
      moduleId: 16,
      module: '用户管理',
      id: 'b91fc694-0e4e-4ea5-8d0e-2ba5aafd9445'
    },
    {
      name: '3-用户删除',
      code: 'user_del',
      moduleId: 16,
      module: '用户管理',
      id: '9a97e2bf-900f-4a11-b177-543551b48415'
    },
    {
      name: '1-部门列表',
      code: 'department_view',
      moduleId: 13,
      module: '部门管理',
      id: '0f46fbe6-ec3d-4851-ae40-58ae94907eb9'
    },
    {
      name: '1-职位列表',
      code: 'position_view',
      moduleId: 14,
      module: '职位管理',
      id: 'd07dbc07-9692-41bb-83fb-7521052ed1b5'
    }
  ],
  role: [
    {
      name: '测试',
      code: 'role_test',
      description: '具备全部数据查看权限，没有相关系统设置的操作权限',
      id: '40af8f42-3b18-410c-9fc2-aba8158e92d7',
      __index: 0,
      isAdd: 1
    },
    {
      name: '网站模块管理员',
      code: 'role_website_admin',
      description: '网站模块管理员',
      id: '9fc587ff-3543-4f58-93ab-15f64d3d19e5',
      isAdd: 2,
      __index: 1
    }
  ],
  roleUser: [
    {
      userId: '1',
      roleId: '9fc587ff-3543-4f58-93ab-15f64d3d19e5'
    },
    {
      userId: '1',
      roleId: '40af8f42-3b18-410c-9fc2-aba8158e92d7'
    },
    {
      userId: '54a3488f-3c94-489e-bcd0-3f2631991f5e',
      roleId: '40af8f42-3b18-410c-9fc2-aba8158e92d7'
    },
    {
      userId: '92e6b921-d820-4ea6-9b57-95b1378c961e',
      roleId: '9fc587ff-3543-4f58-93ab-15f64d3d19e5'
    }
  ],
  permission: [
    {
      roleId: '40af8f42-3b18-410c-9fc2-aba8158e92d7',
      functionId: '34a10659-efd2-4ef8-b2cd-df0cb2269726',
      moduleId: 16,
      id: '6bf300dc-bb3d-4bd5-858d-fff3770cb85e'
    },
    {
      roleId: '9fc587ff-3543-4f58-93ab-15f64d3d19e5',
      functionId: '8ab3b7b6-921a-4f8f-9bad-2fd106c870e1',
      moduleId: 3,
      id: '8671a022-a1f2-41bd-bd12-42c6524f3a63'
    }
  ],
  post: [
    {
      id: '1fb22bed-816a-4b0d-94f2-d9cc8f5e3f3a',
      title: '关于vue-quasar-admin',
      catelog: '首页通知',
      tags: 'quasar,vue,wepack',
      keyWord: 'quasar-admin',
      status: 2,
      sort: 1,
      mdContent: '<p align="center">\n    <a href="https://quasar-framework.org">\n        <img width="200" src="https://quasar-framework.org/images/logo/xxhdpi.png">\n    </a>\n</p>\n\n#### vue-quasar-admin\n&emsp;&emsp;[Quasar-Framework](https://quasar-framework.org/) 是一款基于vue.js开发的开源的前端框架, 它能帮助web开发者快速创建以下网站：响应式网站，渐进式应用，手机应用(通过Cordova)，跨平台应用(通过Electron)。\n&emsp;&emsp;Quasar允许开发者在只写一次代码的情况下发布到多个平台 website, PWA ,Mobile App 和 Electron App 在使用Quasar的时候, 你甚至不需要Hammerjs, Momentjs, 或者Bootstrap, Quasar框架内包含了已经这些东西,你可以很简单就使用到。\n&emsp;&emsp;vue-quasar-admin是基于Quasar-Framework搭建的一套包含通用权限控制的后台管理系统(目前只针对PC端)。\n\n[![](https://ci.appveyor.com/api/projects/status/github/wjkang/vue-quasar-admin?branch=master&svg=true)]()\n[![vue](https://img.shields.io/badge/vue-2.5.16-brightgreen.svg)](https://github.com/vuejs/vue)\n[![quasar framework](https://img.shields.io/badge/quasar-0.15.14-brightgreen.svg)](https://quasar-framework.org/)\n[![MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)]()\n\n#### 功能与特点\n\n- 真实后端数据支持\n- 登录/登出\n- 灵活的九宫格布局\n- 收缩左侧菜单栏\n- tag标签导航\n- 面包屑\n- 全屏/退出全屏\n- 动态菜单\n- 菜单按模块划分\n- 通用权限控制\n    - 菜单级权限控制\n    - 接口级权限控制\n    - 元素级权限控制\n- 全局可配置loading效果\n- 网络异常处理\n- 模块\n    - 系统模块\n        - 系统设置\n            - 菜单管理\n        - 权限管理\n            - 功能管理\n            - 角色管理\n            - 角色权限管理\n            - 角色用户管理\n            - 用户角色管理\n        - 组织架构\n            - 部门管理\n            - 职位管理\n        - 用户管理 \n    - 网站模块\n        - CMS\n            - 文章管理\n    - 开发模块\n        - 官方组件\n            - 。。。\n        - 业务组件\n            - sku\n    - 审计日志\n    - 数据初始化\n\n## 文件结构\n```shell\n.\n├── .quasar  Quasar CLI生成的配置\n└── src\n    ├── assets  资源文件\n    ├── components 自定义组件\n    ├── css 样式文件\n    ├── layout 布局组件\n    ├── libs  工具方法\n    ├── router  路由配置\n    ├── store  状态管理\n    ├── service  API管理\n    ├── plugins  需要全局注册的组件、指令、插件\n    └── pages\n        ├── cms \n        │   └── 文章管理\n        ├── develop\n        │   ├── 官方组件\n        │   └── 业务组件\n        ├── organization\n        │   ├── 部门管理\n        │   └── 职位管理\n        ├── other\n        │   └── 审计日志\n        ├── permission\n        │   ├── 功能管理\n        │   ├── 角色管理\n        │   ├── 角色权限管理 \n        │   ├── 角色用户管理\n        │   └── 用户角色管理\n        ├── system  \n        │   ├── 菜单管理\n        ├── user  \n        │   └── 用户管理\n        ├── 403 无权限页面\n        ├── index 首页\n        └── login 登录页\n        \n```\n\n## 安装使用\n\n## Install\n```bush\nnpm install\n```\n## Run\n### Development\n```bush\nquasar dev\n```\n### Production(Build)\n```bush\nquasar build\n```\n\n### 安装后台程序\n\n\n[后台程序](https://github.com/wjkang/quasar-admin-server)\n\n```bush\ngit clone https://github.com/wjkang/quasar-admin-server.git\n```\n\n## Install\n```bush\nnpm install\n```\n## Run\n### Development\n```bush\nnpm run start\n```\n### Production(Build)\n```bush\nnpm run production\n```\n后端程序使用[koa2](https://github.com/koajs/koa)构建，并且使用[lowdb](https://github.com/typicode/lowdb)持久化数据到JSON文件(使用JSON文件存储是为了快速构建demo)。\n\n## 功能开发步骤（以文章管理为例）\n- 前端\n    - 定义功能码：\n    - post_view  -文章列表查看\n    - post_edit -文章编辑\n    - post_del  -文章删除\n    - 新建文章列表页  post.vue\n    - 新增路由\n    - 使用菜单管理功能新增"文章管理"的相关菜单，菜单名称必须与上一步新增的路由的name字段一致。权限码填定义好的"文章列表查看"功能对应的权限码（菜单级权限控制）\n    - 使用功能管理在新建的菜单下录入定义好的功能名称及功能码\n    - 配置角色与用户\n    - 在角色权限管理为相应的角色设置功能权限\n- 后端\n    - db.json文件新增文章存储结构\n    - services下新增postService.js,编写对db.json文件的操作\n    - controllers下新增post.js,引入postService.js做相关操作\n    - main-routes.js 增加相关路由,使用PermissionCheck中间件进行后端接口级的权限控制(可使用功能码或角色码)\n- 前端\n    - service下新增post.js，配置API相关操作，配置loading字段实现自定义loading效果，permission字段可配置功能编码与角色编码（实现前端接口级权限控制）\n    - 回到post.vue文件，引入API访问文件，编写业务代码\n    - 使用v-permission指令控制页面元素的是否显示，可使用功能编码与角色编码（实现元素级权限控制）\n    - store app模块下配置dontCache，控制页面是否缓存\n    \n可多细节可查看源码\n\n## 效果展示\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/1.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/2.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/3.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/4.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/5.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/6.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/7.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/8.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/9.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/10.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/11.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/12.jpg)\n\n![image](https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/13.jpg)\n\n\n',
      htmlContent: '<p align="center">\n    <a href="https://quasar-framework.org">\n        <img width="200" src="https://quasar-framework.org/images/logo/xxhdpi.png">\n    </a>\n</p>\n<h4>vue-quasar-admin</h4>\n<p>  <a href="https://quasar-framework.org/" target="_blank">Quasar-Framework</a> 是一款基于vue.js开发的开源的前端框架, 它能帮助web开发者快速创建以下网站：响应式网站，渐进式应用，手机应用(通过Cordova)，跨平台应用(通过Electron)。<br />\n  Quasar允许开发者在只写一次代码的情况下发布到多个平台 website, PWA ,Mobile App 和 Electron App 在使用Quasar的时候, 你甚至不需要Hammerjs, Momentjs, 或者Bootstrap, Quasar框架内包含了已经这些东西,你可以很简单就使用到。<br />\n  vue-quasar-admin是基于Quasar-Framework搭建的一套包含通用权限控制的后台管理系统(目前只针对PC端)。</p>\n<p><a href="" target="_blank"><img src="https://ci.appveyor.com/api/projects/status/github/wjkang/vue-quasar-admin?branch=master&amp;svg=true" alt="" /></a><br />\n<a href="https://github.com/vuejs/vue" target="_blank"><img src="https://img.shields.io/badge/vue-2.5.16-brightgreen.svg" alt="vue" /></a><br />\n<a href="https://quasar-framework.org/" target="_blank"><img src="https://img.shields.io/badge/quasar-0.15.14-brightgreen.svg" alt="quasar framework" /></a><br />\n<a href="" target="_blank"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT" /></a></p>\n<h4>功能与特点</h4>\n<ul>\n<li>真实后端数据支持</li>\n<li>登录/登出</li>\n<li>灵活的九宫格布局</li>\n<li>收缩左侧菜单栏</li>\n<li>tag标签导航</li>\n<li>面包屑</li>\n<li>全屏/退出全屏</li>\n<li>动态菜单</li>\n<li>菜单按模块划分</li>\n<li>通用权限控制\n<ul>\n<li>菜单级权限控制</li>\n<li>接口级权限控制</li>\n<li>元素级权限控制</li>\n</ul>\n</li>\n<li>全局可配置loading效果</li>\n<li>网络异常处理</li>\n<li>模块\n<ul>\n<li>系统模块\n<ul>\n<li>系统设置\n<ul>\n<li>菜单管理</li>\n</ul>\n</li>\n<li>权限管理\n<ul>\n<li>功能管理</li>\n<li>角色管理</li>\n<li>角色权限管理</li>\n<li>角色用户管理</li>\n<li>用户角色管理</li>\n</ul>\n</li>\n<li>组织架构\n<ul>\n<li>部门管理</li>\n<li>职位管理</li>\n</ul>\n</li>\n<li>用户管理</li>\n</ul>\n</li>\n<li>网站模块\n<ul>\n<li>CMS\n<ul>\n<li>文章管理</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>开发模块\n<ul>\n<li>官方组件\n<ul>\n<li>。。。</li>\n</ul>\n</li>\n<li>业务组件\n<ul>\n<li>sku</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>审计日志</li>\n<li>数据初始化</li>\n</ul>\n</li>\n</ul>\n<h2>文件结构</h2>\n<pre><div class="hljs"><code class="lang-shell">.\n├── .quasar  Quasar CLI生成的配置\n└── src\n    ├── assets  资源文件\n    ├── components 自定义组件\n    ├── css 样式文件\n    ├── layout 布局组件\n    ├── libs  工具方法\n    ├── router  路由配置\n    ├── store  状态管理\n    ├── service  API管理\n    ├── plugins  需要全局注册的组件、指令、插件\n    └── pages\n        ├── cms \n        │   └── 文章管理\n        ├── develop\n        │   ├── 官方组件\n        │   └── 业务组件\n        ├── organization\n        │   ├── 部门管理\n        │   └── 职位管理\n        ├── other\n        │   └── 审计日志\n        ├── permission\n        │   ├── 功能管理\n        │   ├── 角色管理\n        │   ├── 角色权限管理 \n        │   ├── 角色用户管理\n        │   └── 用户角色管理\n        ├── system  \n        │   ├── 菜单管理\n        ├── user  \n        │   └── 用户管理\n        ├── 403 无权限页面\n        ├── index 首页\n        └── login 登录页\n        \n</code></div></pre>\n<h2>安装使用</h2>\n<h2>Install</h2>\n<pre><code class="lang-bush">npm install\n</code></pre>\n<h2>Run</h2>\n<h3>Development</h3>\n<pre><code class="lang-bush">quasar dev\n</code></pre>\n<h3>Production(Build)</h3>\n<pre><code class="lang-bush">quasar build\n</code></pre>\n<h3>安装后台程序</h3>\n<p><a href="https://github.com/wjkang/quasar-admin-server" target="_blank">后台程序</a></p>\n<pre><code class="lang-bush">git clone https://github.com/wjkang/quasar-admin-server.git\n</code></pre>\n<h2>Install</h2>\n<pre><code class="lang-bush">npm install\n</code></pre>\n<h2>Run</h2>\n<h3>Development</h3>\n<pre><code class="lang-bush">npm run start\n</code></pre>\n<h3>Production(Build)</h3>\n<pre><code class="lang-bush">npm run production\n</code></pre>\n<p>后端程序使用<a href="https://github.com/koajs/koa" target="_blank">koa2</a>构建，并且使用<a href="https://github.com/typicode/lowdb" target="_blank">lowdb</a>持久化数据到JSON文件(使用JSON文件存储是为了快速构建demo)。</p>\n<h2>功能开发步骤（以文章管理为例）</h2>\n<ul>\n<li>前端\n<ul>\n<li>定义功能码：</li>\n<li>post_view  -文章列表查看</li>\n<li>post_edit -文章编辑</li>\n<li>post_del  -文章删除</li>\n<li>新建文章列表页  post.vue</li>\n<li>新增路由</li>\n<li>使用菜单管理功能新增&quot;文章管理&quot;的相关菜单，菜单名称必须与上一步新增的路由的name字段一致。权限码填定义好的&quot;文章列表查看&quot;功能对应的权限码（菜单级权限控制）</li>\n<li>使用功能管理在新建的菜单下录入定义好的功能名称及功能码</li>\n<li>配置角色与用户</li>\n<li>在角色权限管理为相应的角色设置功能权限</li>\n</ul>\n</li>\n<li>后端\n<ul>\n<li>db.json文件新增文章存储结构</li>\n<li>services下新增postService.js,编写对db.json文件的操作</li>\n<li>controllers下新增post.js,引入postService.js做相关操作</li>\n<li>main-routes.js 增加相关路由,使用PermissionCheck中间件进行后端接口级的权限控制(可使用功能码或角色码)</li>\n</ul>\n</li>\n<li>前端\n<ul>\n<li>service下新增post.js，配置API相关操作，配置loading字段实现自定义loading效果，permission字段可配置功能编码与角色编码（实现前端接口级权限控制）</li>\n<li>回到post.vue文件，引入API访问文件，编写业务代码</li>\n<li>使用v-permission指令控制页面元素的是否显示，可使用功能编码与角色编码（实现元素级权限控制）</li>\n<li>store app模块下配置dontCache，控制页面是否缓存</li>\n</ul>\n</li>\n</ul>\n<p>可多细节可查看源码</p>\n<h2>效果展示</h2>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/1.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/2.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/3.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/4.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/5.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/6.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/7.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/8.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/9.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/10.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/11.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/12.jpg" alt="image" /></p>\n<p><img src="https://raw.githubusercontent.com/wjkang/vue-quasar-admin/master/screenshot/13.jpg" alt="image" /></p>\n',
      shortContent: 'Quasar-Framework 是一款基于vue.js开发的开源的前端框架, 它能帮助web开发者快速创建以下网站：响应式网站，渐进式应用，手机应用(通过Cordova)，跨平台应用(通过Electron)。Quasar允许开发者在只写一次代码的情况下发布到多个平台 website, PWA ,Mobile App 和 Electron App 在使用Quasar的时候, 你甚至不需要Hammerjs, Momentjs, 或者Bootstrap, Quasar框架内包含了已经这些东西,你可以很简单就使用到。vue-quasar-admin是基于Quasar-Framework搭建的一套包含通用权限控制的后台管理系统。',
      isTimePublish: 1,
      updatedDate: 1526529862530,
      createdDate: 1526478314035,
      publishedDate: '2018-05-17T02:20:00.000+08:00'
    }
  ]
}

module.exports = {
  dbConfig
}
