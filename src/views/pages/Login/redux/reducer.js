import { actionTypes } from './actions';

// import * as common from "../../redux/constants"; // 公共状态

export default function(state, action) {
  if (!state) {
    state = {
      isLogin: false,
      error: '',
    };
  }
  switch (action.type) {
    case actionTypes.REGISTER_CLEARERROR_OK:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.BEFORE_LOGIN:
      // 获取用户信息
      console.log('BEFORE_LOGIN', state);
      return {
        ...state,
        isLogin: false,
        error: '',
      };
    case actionTypes.LOGIN_SUCCESS:
      // 获取用户信息
      return {
        ...state,
        ...action.payload.data,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.data.accessToken,
        ...action.payload,
        isLogin: true,
      };
    case actionTypes.LOGIN_ERROR:
      // 登出
      return {
        ...state,
        ...action.payload,
        error: action.payload.msg,
      };
    case actionTypes.LOGOUT_SUCCESS:
      // 登出
      return {
        ...state,
        isLogin: false,
        error: '',
      };
    default:
      return state;
  }
}
