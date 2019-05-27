import Loadable from 'react-loadable';
import ContentLoader from '../views/common/ContentLoader';

const Menu = Loadable({
  loader: () => import('../views/pages/Menu'),
  loading: ContentLoader,
});
const FunctionPage = Loadable({
  loader: () => import('../views/pages/Function'),
  loading: ContentLoader,
});
const Role = Loadable({
  loader: () => import('../views/pages/Role/component'),
  loading: ContentLoader,
});
const Home = Loadable({
  loader: () => import('../views/common/Home'),
  loading: ContentLoader,
});
const RolePermission = Loadable({
  loader: () => import('../views/pages/RolePermisson/component'),
  loading: ContentLoader,
});
// const RoleUser = Loadable({
//   loader: () => import('@/pages/roleUser'),
//   loading: ContentLoader,
// });
// const UserRole = Loadable({
//   loader: () => import('@/pages/userRole'),
//   loading: ContentLoader,
// });
// const User = Loadable({
//   loader: () => import('@/pages/user'),
//   loading: ContentLoader,
// });
const Page404 = Loadable({
  loader: () => import('../views/common/Page404'),
  loading: ContentLoader,
});
const Page403 = Loadable({
  loader: () => import('../views/common/Page403'),
  loading: ContentLoader,
});
const RequestLog = Loadable({
  loader: () => import('../views/common/RequsetLog'),
  loading: ContentLoader,
});
// example
// const PermissionTest = Loadable({
//   loader: () => import('@/pages/example/PermissionTest'),
//   loading: ContentLoader,
// });
// const SearchForm = Loadable({
//   loader: () => import('@/pages/example/JsonForm/SearchForm'),
//   loading: ContentLoader,
// });
// const CommonForm = Loadable({
//   loader: () => import('@/pages/example/JsonForm/CommonForm'),
//   loading: ContentLoader,
// });
// const DynamicForm = Loadable({
//   loader: () => import('@/pages/example/JsonForm/DynamicForm'),
//   loading: ContentLoader,
// });
// key为与后端返回菜单的name相对应
export default {
  menu: Menu,
  home: Home,
  function: FunctionPage,
  role: Role,
  rolepermission: RolePermission,
  // roleuser: RoleUser,
  // userrole: UserRole,
  // user_index: User,
  page404: Page404,
  page403: Page403,
  requestlog: RequestLog,
  // example
  error_404: Page404,
  error_403: Page403,
  // permission_test: PermissionTest,
  // search_form: SearchForm,
  // common_form: CommonForm,
  // dynamic_form: DynamicForm,
};
