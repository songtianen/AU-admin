import { actionTypes } from './actions';

// import * as common from "../../redux/constants"; // 公共状态

export default function(state, action) {
  if (!state) {
    state = {
      currentModuleKey: '',
      currenrModuleMenu: [],
    };
  }
  switch (action.type) {
    case actionTypes.INIT_MENU:
      // 获取用户信息
      // console.log('BEFORE_LOGIN', state);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
