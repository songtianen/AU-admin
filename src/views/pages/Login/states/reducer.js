import { actionTypes } from './actions';

// import * as common from "../../redux/constants"; // 公共状态

export default function(state, action) {
  if (!state) {
    state = {
      token: '',
      statusCode: '',
      permission: [],
      error: '',
    };
  }
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      // 获取用户信息
      console.log('actions.LOGIN_SUCCESS', action);
      return {
        ...state,
        token: action.payload.data.accessToken,
        statusCode: action.payload.statusCode,
      };
    case actionTypes.LOGIN_ERROR:
      // 登出
      return {
        ...state,
        statusCode: action.payload.statusCode,
        error: action.payload.msg,
      };
    case actionTypes.LOGOUT_SUCCESS:
      // 登出
      return {
        token: state.token,
        name: '',
        avatar: '',
        isAdmin: 0,
        permission: [],
      };
    default:
      return state;
  }
}
