export const actionTypes = {
  DO_UPDATE_MODULE: 'app/DO_UPDATE_MODULE',
  UPDATE_MODULE_SUCCESS: 'app/DO_UPDATE_MODULE_SUCCESS',
  DO_UPDATE_ACCESSMENU: 'app/DO_UPDATE_ACCESSMENU',
  UPDATE_ACCESSMENU_SUCCESS: 'app/UPDATE_ACCESSMENU_SUCCESS',
  GET_USERINFO_SUCCESS: 'app/GET_USERINFO_SUCCESS',
  DO_GET_USERINFO: 'app/DO_GET_USERINFO',
  DO_INIT_MENU: 'app/DO_INIT_MENU',
  DO_INIT_APPDATA: 'app/DO_INIT_APPDATA',
  INIT_APPDATA_SUCCESS: 'app/INIT_APPDATA_SUCCESS',
};

export const getAccessMenuAction = (data) => {
  return { type: actionTypes.DO_UPDATE_ACCESSMENU, payload: data };
};
export const getAccessMenuSuccessAction = (data) => {
  return { type: actionTypes.UPDATE_ACCESSMENU_SUCCESS, payload: data };
};

export const updateModuleAction = (data) => {
  return { type: actionTypes.DO_UPDATE_MODULE, payload: data };
};
export const updateModuleSucessAction = (data) => {
  return { type: actionTypes.UPDATE_MODULE_SUCCESS, payload: data };
};
export const initMenuAction = (data) => {
  return { type: actionTypes.DO_INIT_MENU, payload: data };
};
export const initAppDataAction = (data) => {
  return { type: actionTypes.DO_INIT_APPDATA, payload: data };
};
export const initAppDataSuccessAction = (data) => {
  return { type: actionTypes.INIT_APPDATA_SUCCESS, payload: data };
};
// userActions

export const getUserInfoSuccess = (data) => {
  return { type: actionTypes.GET_USERINFO_SUCCESS, payload: data };
};
export const getUserInfoAction = (data) => {
  return { type: actionTypes.DO_GET_USERINFO, payload: data };
};
