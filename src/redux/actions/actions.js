export const actionTypes = {
  DO_UPDATE_MODULE: 'app/DO_UPDATE_MODULE',
  UPDATE_MODULE_SUCCESS: 'app/DO_UPDATE_MODULE_SUCCESS',
  DO_UPDATE_ACCESSMENU: 'app/DO_UPDATE_ACCESSMENU',
  UPDATE_ACCESSMENU_SUCCESS: 'app/UPDATE_ACCESSMENU_SUCCESS',
  GET_USERINFO_SUCCESS: 'user/GET_USERINFO_SUCCESS',
  DO_GET_USERINFO: 'user/DO_GET_USERINFO',
};

export const updateAccessMenu = (data) => {
  return { type: actionTypes.DO_UPDATE_ACCESSMENU, payload: data };
};
export const updateAccessMenuSuccess = (data) => {
  return { type: actionTypes.UPDATE_ACCESSMENU_SUCCESS, payload: data };
};

export const updateModule = (data) => {
  return { type: actionTypes.DO_UPDATE_MODULE, payload: data };
};
export const updateModuleSucess = (data) => {
  return { type: actionTypes.UPDATE_MODULE_SUCCESS, payload: data };
};

// userActions

export const getUserInfoSuccess = (data) => {
  return { type: actionTypes.GET_USERINFO_SUCCESS, payload: data };
};
export const getUserInfo = (data) => {
  return { type: actionTypes.DO_GET_USERINFO, payload: data };
};
