import * as actions from './actionTypes';

// export const isFetching = ({ viewType, data }) => ({
//   type: viewType,
//   payload: data
// });
// export const sessionStorage = ({ viewType, data }) => ({
//   type: viewType,
//   payload: data
// });
// export const clearStates = ({ viewType, data }) => ({
//   type: viewType,
//   payload: data
// });

// export const spinLoading = (loading) => {
//   return { type: SPIN_LOADING, spinLoading: loading }
// }

// export const updateToPath = (toPath) => {
//   return { type: UPDATE_TOPATH, toPath: toPath }
// }

export const updateAccessMenu = (data) => {
  return { type: actions.UPDATE_ACCESSMENU, ...data };
};

export const updateModule = (module) => {
  return { type: actions.UPDATE_MODULE, ...module };
};

// userActions

// action creators
export const login = (token) => {
  return { type: actions.LOGIN_SUCCESS, token };
};

export const updateUserInfo = (userInfo) => {
  return { type: actions.GET_USERINFO_SUCCESS, ...userInfo };
};

export const logout = () => {
  return { type: actions.LOGOUT_SUCCESS };
};
