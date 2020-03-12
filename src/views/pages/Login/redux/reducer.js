import { actionTypes } from './actions';

// import * as common from "../../redux/constants"; // 公共状态

export default function(state, action) {
  if (!state) {
    state = {
      // isLogin: false,
      // error: '',
      // isLogout: false,
    };
  }
  switch (action.type) {
    case actionTypes.BEFORE_LOGIN:
      // 获取用户信息
      // console.log('BEFORE_LOGIN', state);
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
        isLogout: false,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload.data,
        isLogin: true,
        isLogout: false,
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
        // isLogin: false,
        // error: '',
        ...action.payload,
      };
    default:
      return state;
  }
}
