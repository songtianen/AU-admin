import { actionTypes } from '../actions/actions';

export default function app(state, action) {
  if (!state) {
    state = {
      name: '',
      avatar: '',
      isAdmin: '',
      token: '',
      theme: '',
      permission: [],
      spinLoading: false,
      toPath: '/',
      siderSelectedKey: [],
      siderOpenKeys: [],
      headerCurrentModuleName: '', // Header title
      accessMenu: [], // 后端返回的menu与前端固定的menu总和,
      moduleList: [], // 模块列表
      siderModuleMenu: [], // 模块菜单
    };
  }
  switch (action.type) {
    case actionTypes.UPDATE_ACCESSMENU_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.INIT_APPDATA_SUCCESS:
      console.log('actions.DO_INIT_MENU', action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.UPDATE_MODULE_SUCCESS:
      console.log('actions.UPDATE_MODULE_SUCCESS', action.payload);
      return {
        ...state,
        headerCurrentModuleName: action.payload.headerCurrentModuleName,
        siderModuleMenu: action.payload.siderModuleMenu,
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
