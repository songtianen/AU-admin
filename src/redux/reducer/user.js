import * as actions from '../actions/actionTypes';

export default function user(state, action) {
  if (!state) {
    state = {
      token: '',
      name: 'admin',
      avatar: '',
      isAdmin: 0,
      permission: [],
    };
  }
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      // 登录
      return { ...state, token: action.token };
    case actions.GET_USERINFO_SUCCESS:
      // 获取用户信息
      console.log('actions.GET_USERINFO_SUCCESS', action);
      return {
        ...state,
        name: action.name,
        avatar: action.avatar,
        isAdmin: action.isAdmin,
        permission: action.permission,
      };
    case actions.LOGOUT_SUCCESS:
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
