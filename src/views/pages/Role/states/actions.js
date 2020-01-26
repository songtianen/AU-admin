export const actionTypes = {
  ADD_ROLE: 'role/ADD_ROLE',
  ROLE_PAGELIST: 'role/ROLE_PAGELIST',
  DEL_ROLES: 'role/DEL_ROLES',
  DEL_ROLE: 'role/DEL_ROLE',
  SAVE_ROLE: 'role/SAVE_ROLE',
};

export const constants = {
  NAME: 'role',
};

// action creators
export const addRole = (data) => {
  return { type: actionTypes.ADD_ROLE, payload: data };
};
export const getRolePagedList = (data) => {
  return { type: actionTypes.ROLE_PAGELIST, payload: data };
};
export const delRole = (data) => {
  return { type: actionTypes.DEL_ROLE, payload: data };
};
export const delRoles = (data) => {
  return { type: actionTypes.DEL_ROLES, payload: data };
};
export const saveRole = (data) => {
  return { type: actionTypes.SAVE_ROLE, payload: data };
};
