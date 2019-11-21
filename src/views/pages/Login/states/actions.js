export const actionTypes = {
  DO_LOGIN: 'login/DO_LOGIN',
  DO_REGISTER: 'login/DO_REGISTER',
  REGISTER_SUCCESS: 'login/REGISTER_SUCCESS',
  LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
  LOGIN_ERROR: 'login/LOGIN_ERROR',
  LOGOUT_SUCCESS: 'login/LOGOUT_SUCCESS',
};

export const constans = {
  NAME: 'login',
};

// action creators
export const login = (data) => {
  return { type: actionTypes.DO_LOGIN, payload: data };
};
export const register = (data) => {
  return { type: actionTypes.DO_REGISTER, payload: data };
};

export const logout = () => {
  return { type: actionTypes.LOGOUT_SUCCESS };
};
