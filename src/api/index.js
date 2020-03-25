import qs from 'qs';
import request from '../util/request';

export function loginByUsername(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
    // loding:'spin',
  });
}

export function loginRegister(params) {
  return request({
    url: '/user/register',
    method: 'post',
    data: qs.stringify(params),
  });
}

export function logout(query) {
  return request({
    url: '/user/logout',
    method: 'get',
    params: query,
  });
}

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get',
  });
}

// user
// 根据角色获取用户列表
export function getUserFromRole(query) {
  return request({
    url: '/role/userfromrole',
    method: 'get',
    params: query,
  });
}

export function getAllUser(query) {
  return request({
    url: '/user/getalluser',
    method: 'get',
    params: query,
  });
}

export function delUser(id) {
  return request({
    url: '/user/batchdel',
    method: 'delete',
    params: id,
    loading: 'message',
    // permission: ['xxoo'] 接口级权限效验,请求相应接口时,直接拦截请求,
  });
}

export function delUsers(ids) {
  return request({
    url: '/user/del',
    method: 'post',
    data: ids,
    loading: 'message',
  });
}

export function addUser(data) {
  return request({
    url: '/user/adduser',
    method: 'post',
    data,
    loading: 'message',
  });
}
export function editUser(data) {
  return request({
    url: '/user/edituser',
    method: 'post',
    data,
    loading: 'message',
  });
}

// menu

// 获取有权限的菜单
export function getAccessMenu() {
  return request({
    url: '/menu/getaccessmenu',
    method: 'get',
  });
}
// 获取非树结构菜单
export function getAllMenu(query) {
  return request({
    url: '/menu',
    method: 'get',
    params: query,
  });
}
export function getAllMenuWithFunction(query) {
  return request({
    url: '/menu/getAllMenuWithFunction',
    method: 'get',
    params: query,
  });
}
export function editMenu(menu) {
  return request({
    url: '/menu/editmenu',
    method: 'post',
    data: menu,
    loading: 'message',
    // permission: ['menu_edit'],
  });
}
export function addMenu(menu) {
  return request({
    url: '/menu/addmenu',
    method: 'post',
    data: menu,
    loading: 'message',
    // permission: ['menu_edit'],
  });
}
export function delMenus(data) {
  return request({
    url: '/menu/delmenus',
    method: 'post',
    data,
    loading: 'message',
    // permission: ['menu_edit'],
  });
}
export function getIcons() {
  return request({
    url: '/icons',
    method: 'get',
  });
}

// function
export function getFunctionPagedList(query) {
  return request({
    url: '/function/pagedlist',
    method: 'get',
    params: query,
  });
}

export function delFunction(id) {
  return request({
    url: '/function/del',
    method: 'get',
    params: id,
    loading: 'message',
  });
}

export function delFunctions(ids) {
  return request({
    url: '/function/batchdel',
    method: 'get',
    params: ids,
    loading: 'message',
  });
}

export function addFunction(data) {
  return request({
    url: '/function/add',
    method: 'post',
    data,
    loading: 'message',
  });
}
export function editFunction(data) {
  return request({
    url: '/function/edit',
    method: 'post',
    data,
    loading: 'message',
  });
}

// role
// 角色接口
export function getRolePagedList(query) {
  return request({
    url: '/role/pagedlist',
    method: 'get',
    params: query,
  });
}
export function getRoleFromUserId(query) {
  return request({
    url: '/role/getrolefromuserId',
    method: 'get',
    params: query,
  });
}

export function delUserForRoleId(data) {
  return request({
    url: '/role/deluserforroleid',
    method: 'post',
    data,
    loading: 'message',
  });
}

export function delRoleForUserId(data) {
  return request({
    url: '/role/delroleforuserid',
    method: 'post',
    data,
    loading: 'message',
  });
}

export function addUserForRole(data) {
  return request({
    url: '/role/adduserforrole',
    method: 'post',
    data,
    loading: 'message',
  });
}

export function delRoles(ids) {
  return request({
    url: '/role/batchdel',
    method: 'post',
    data: ids,
    loading: 'message',
  });
}

export function editRole(data) {
  return request({
    url: '/role/edit',
    method: 'post',
    data,
    loading: 'message',
  });
}
export function addRole(data) {
  return request({
    url: '/role/addrole',
    method: 'post',
    data,
    loading: 'message',
  });
}
export function addRoleForUser(data) {
  return request({
    url: '/role/addroleforuser',
    method: 'post',
    data,
    loading: 'message',
  });
}

// 保存角色权限
export function savePermission(data) {
  return request({
    url: '/role/savepermission',
    method: 'post',
    data,
    loading: 'message',
  });
}

// resetDb
export function resetDb() {
  return request({
    url: '/resetdb',
    method: 'post',
    loading: 'message',
  });
}

// requestlog
export function getRequestLogPagedList(query) {
  return request({
    url: '/requestlog/pagedlist',
    method: 'get',
    params: query,
  });
}

// post
export function getPostPagedList(query) {
  return request({
    url: '/post/pagedlist',
    method: 'get',
    params: query,
  });
}

export function getPost(id) {
  return request({
    url: `/post/${id}`,
    method: 'get',
    loading: 'message',
  });
}

export function savePost(post) {
  return request({
    url: '/post/save',
    method: 'post',
    data: post,
    loading: 'message',
  });
}

export function getTopPostByQuery(query) {
  return request({
    url: '/post/top',
    method: 'get',
    params: query,
    // loading: "spin",
    permission: ['xxoo'],
  });
}

// department
export function getAllDepartmentAndRole() {
  return request({
    url: '/department/departmentandrole',
    method: 'get',
  });
}

export function getAllDepartment(query) {
  return request({
    url: '/department',
    method: 'get',
    params: query,
  });
}

export function getAllDepartmentTree(query) {
  return request({
    url: '/department/getAllDepartmentTree',
    method: 'get',
    params: query,
  });
}

export function addDepartment(data) {
  return request({
    url: '/department/adddepartment',
    method: 'post',
    data,
    loading: 'message',
  });
}
export function delDepartment(data) {
  return request({
    url: '/department/deldepartment',
    method: 'post',
    data,
    loading: 'message',
  });
}
export function editDepartment(data) {
  return request({
    url: '/department/editdepartment',
    method: 'post',
    data,
    loading: 'message',
  });
}
