import qs from 'qs';
import request from '../util/request';

export function loginByUsername(username, password) {
  const data = {
    username,
    password,
  };
  return request({
    url: '/user/login',
    method: 'post',
    data: qs.stringify(data),
    // loading: 'spin',
  });
}

export function loginRegister(params) {
  return request({
    url: '/user/register',
    method: 'post',
    data: qs.stringify(params),
    // loading: 'spin',
  });
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post',
    loading: 'spin',
  });
}

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get',
    loading: 'spin',
  });
}

// user
export function getUserList() {
  return request({
    url: '/user/userlist',
    method: 'get',
  });
}
// 根据角色获取用户列表
export function getUserPagedList(query) {
  return request({
    url: '/user/pagedlist',
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
    url: '/user/del',
    method: 'delete',
    params: id,
    loading: 'message',
    // permission: ['xxoo'] 接口级权限效验,请求相应接口时,直接拦截请求,
  });
}

export function delUsers(ids) {
  return request({
    url: '/user/batchdel',
    method: 'delete',
    params: ids,
    loading: 'message',
  });
}

export function saveUser(data) {
  return request({
    url: '/user/save',
    method: 'post',
    data,
    loading: 'message',
  });
}

export function editRoleUser(data) {
  return request({
    url: '/user/editroleuser',
    method: 'post',
    data,
    loading: 'message',
  });
}

// menu
export function getAccessMemu() {
  return request({
    url: '/menu/getaccessmenu',
    method: 'get',
    // loading: 'spin',
  });
}

export function getAllMenu() {
  return request({
    url: '/menu',
    method: 'get',
    // loading: 'spin',
  });
}

export function saveMenu(menu) {
  return request({
    url: '/menu/savemenu',
    method: 'post',
    data: menu,
    loading: 'message',
    permission: ['menu_edit'],
  });
}

export function getMenuFunctions(menuId) {
  return request({
    url: '/menu/menufunctions',
    method: 'get',
    params: menuId,
    loading: 'spin',
  });
}

export function getIcons() {
  return request({
    url: '/icons',
    method: 'get',
    loading: 'spin',
  });
}

// function
export function getMenuListFunctionCode() {
  return request({
    url: '/function/menulistfunctioncode',
    method: 'get',
    loading: 'spin',
  });
}

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

export function saveFunction(data) {
  return request({
    url: '/function/save',
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

export function delRole(id) {
  return request({
    url: '/role/del',
    method: 'post',
    data: id,
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

export function saveRole(data) {
  return request({
    url: '/role/save',
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
