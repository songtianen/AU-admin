import { actionTypes } from '../actions/actions';

export default function app(state, action) {
  if (!state) {
    state = {
      name: '',
      avatar: '',
      isAdmin: '',
      token: '',
      permission: [],
      spinLoading: false,
      toPath: '/',
      currentModule: '', // Header title
      accessMenu: [], // 后端返回的menu与前端固定的menu总和,
      openAccessMenu: [], // 展开的可访问的菜单(子级包含父级name)
      moduleList: [], // 模块列表
      moduleMenu: [], // 模块菜单
    };
  }
  switch (action.type) {
    case actionTypes.UPDATE_ACCESSMENU_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.UPDATE_MODULE_SUCCESS:
      console.log('actions.UPDATE_MODULE_SUCCESS', action.payload);
      return {
        ...state,
        currentModule: action.payload.currentModule,
        moduleMenu: action.payload.moduleMenu,
      };
    case actionTypes.GET_USERINFO_SUCCESS:
      // 获取用户信息
      console.log('actions.GET_USERINFO_SUCCESS', action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
