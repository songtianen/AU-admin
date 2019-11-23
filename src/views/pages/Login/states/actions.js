export const actionTypes = {
  DO_LOGIN: 'login/DO_LOGIN',
  DO_REGISTER: 'login/DO_REGISTER',
  REGISTER_SUCCESS: 'login/REGISTER_SUCCESS',
  DO_REGISTER_CLEARERROR: 'login/DO_REGISTER_CLEARERROR',
  REGISTER_CLEARERROR_OK: 'login/REGISTER_CLEARERROR_OK',
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
export const clearRegisterError = (data) => {
  return { type: actionTypes.DO_REGISTER_CLEARERROR, payload: data };
};

export const logout = () => {
  return { type: actionTypes.LOGOUT_SUCCESS };
};
