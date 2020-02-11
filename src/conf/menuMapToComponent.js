// layout/content组件用
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
const RoleUser = Loadable({
  loader: () => import('../views/pages/RoleUser/component'),
  loading: ContentLoader,
});
const UserRole = Loadable({
  loader: () => import('../views/pages/UserRole/component'),
  loading: ContentLoader,
});
const Department = Loadable({
  loader: () => import('../views/pages/Department/component'),
  loading: ContentLoader,
});
const Position = Loadable({
  loader: () => import('../views/pages/Role/component'),
  loading: ContentLoader,
});

const Users = Loadable({
  loader: () => import('../views/pages/Users/component'),
  loading: ContentLoader,
});
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

// key为与后端返回菜单的name相对应
export default {
  menu: Menu,
  home: Home,
  function: FunctionPage,
  role: Role,
  rolepermission: RolePermission,
  roleuser: RoleUser,
  userrole: UserRole,
  position: Position,
  department: Department,
  users: Users,
  page404: Page404,
  page403: Page403,
  requestlog: RequestLog,
  error_404: Page404,
  error_403: Page403,
};
