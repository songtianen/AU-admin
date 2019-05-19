import qs from 'qs';
import request from '../util/request';

export function loginByUsername(username, password) {
  console.log('http loginByUsername ------', username, password);
  const data = {
    username,
    password,
  };
  return request({
    url: '/user/login',
    method: 'post',
    data: qs.stringify(data),
    loading: 'spin',
  });
}

export function logout() {
  console.log('http logout ------');
  return request({
    url: '/auth/logout',
    method: 'post',
    loading: 'spin',
  });
}

export function getUserInfo() {
  console.log('http getUserInfo ------');
  return request({
    url: '/user/info',
    method: 'get',
    loading: 'spin',
  });
}

// user
export function getUserList() {
  console.log('http getUserList ------');

  return request({
    url: '/user/userlist',
    method: 'get',
  });
}
export function getUserPagedList(query) {
  console.log('http getUserPagedList ------');

  return request({
    url: '/user/pagedlist',
    method: 'get',
    params: query,
  });
}

export function delUser(id) {
  console.log('http delUser id ------', id);

  return request({
    url: '/user/del',
    method: 'delete',
    params: id,
    loading: 'message',
    // permission: ['xxoo'] 接口级权限效验,请求相应接口时,直接拦截请求,
  });
}

export function delUsers(ids) {
  console.log('http delUsers ids ------', ids);

  return request({
    url: '/user/batchdel',
    method: 'delete',
    params: ids,
    loading: 'message',
  });
}

export function saveUser(data) {
  console.log('http saveUser ------', data);

  return request({
    url: '/user/save',
    method: 'post',
    data,
    loading: 'message',
  });
}

export function editRoleUser(data) {
  console.log('http editRoleUser ------', data);

  return request({
    url: '/user/editroleuser',
    method: 'post',
    data,
    loading: 'message',
  });
}

// menu
export function getAccessMemu() {
  console.log('http getAccessMemu ------');
  return request({
    url: '/menu/getaccessmenu',
    method: 'get',
    loading: 'spin',
  });
}

export function getAllMenu() {
  console.log('http getAllMenu ------');
  return request({
    url: '/menu',
    method: 'get',
    loading: 'spin',
  });
}

export function saveMenu(menu) {
  console.log('http saveMenu ------', menu);

  return request({
    url: '/menu/savemenu',
    method: 'post',
    data: menu,
    loading: 'message',
    permission: ['menu_edit'],
  });
}

export function getMenuFunctions(menuId) {
  console.log('http getMenuFunctions ------', menuId);

  return request({
    url: '/menu/menufunctions',
    method: 'get',
    params: menuId,
    loading: 'spin',
  });
}

export function getIcons() {
  console.log('http getIcons ------');

  return request({
    url: '/icons',
    method: 'get',
    loading: 'spin',
  });
}

// function
export function getMenuListFunctionCode() {
  console.log('http getMenuListFunctionCode ------');

  return request({
    url: '/function/menulistfunctioncode',
    method: 'get',
    loading: 'spin',
  });
}

export function getFunctionPagedList(query) {
  console.log('http getFunctionPagedList ------', query);

  return request({
    url: '/function/pagedlist',
    method: 'get',
    params: query,
  });
}

export function delFunction(id) {
  console.log('http delFunction id ------', id);

  return request({
    url: '/function/del',
    method: 'get',
    params: id,
    loading: 'message',
  });
}

export function delFunctions(ids) {
  console.log('http delFunctions ids ------', ids);

  return request({
    url: '/function/batchdel',
    method: 'get',
    params: ids,
    loading: 'message',
  });
}

export function saveFunction(data) {
  console.log('http saveFunction ------', data);

  return request({
    url: '/function/save',
    method: 'post',
    data,
    loading: 'message',
  });
}

// role
export function getRolePagedList(query) {
  console.log('http getRolePagedList ------', query);

  return request({
    url: '/role/pagedlist',
    method: 'get',
    params: query,
  });
}

export function delRole(id) {
  console.log('http delRole ------', id);

  return request({
    url: '/role/del',
    method: 'delete',
    params: id,
    loading: 'message',
  });
}

export function delRoles(ids) {
  console.log('http delRoles ids ------', ids);
  return request({
    url: '/role/batchdel',
    method: 'delete',
    params: ids,
    loading: 'message',
  });
}

export function saveRole(data) {
  console.log('http saveRole ------', data);

  return request({
    url: '/role/save',
    method: 'post',
    data,
    loading: 'message',
  });
}

export function savePermission(data) {
  console.log('http savePermission ------', data);

  return request({
    url: '/role/savepermission',
    method: 'post',
    data,
    loading: 'message',
  });
}

// resetDb
export function resetDb() {
  console.log('http resetDb ------');

  return request({
    url: '/resetdb',
    method: 'post',
    loading: 'message',
  });
}

// requestlog
export function getRequestLogPagedList(query) {
  console.log('http getRequestLogPagedList ------', query);

  return request({
    url: '/requestlog/pagedlist',
    method: 'get',
    params: query,
  });
}

// post
export function getPostPagedList(query) {
  console.log('http getPostPagedList ------', query);

  return request({
    url: '/post/pagedlist',
    method: 'get',
    params: query,
  });
}

export function getPost(id) {
  console.log('http getPost ------', id);
  return request({
    url: `/post/${id}`,
    method: 'get',
    loading: 'message',
  });
}

export function savePost(post) {
  console.log('http savePost ------', post);

  return request({
    url: '/post/save',
    method: 'post',
    data: post,
    loading: 'message',
  });
}

export function getTopPostByQuery(query) {
  console.log('http getTopPostByQuery ------', query);
  return request({
    url: '/post/top',
    method: 'get',
    params: query,
    // loading: "spin",
    permission: ['xxoo'],
  });
}
