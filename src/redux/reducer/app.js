import { UPDATE_MODULE, UPDATE_ACCESSMENU } from '../actions/actionTypes';

export default function app(state, action) {
  if (!state) {
    state = {
      spinLoading: false,
      toPath: '/',
      currentModule: '', // 当前模块
      accessMenu: [], // 可访问的菜单,
      openAccessMenu: [], // 展开的可访问的菜单(子级包含父级name)
      moduleList: [], // 模块列表
      moduleMenu: [], // 模块菜单
    };
  }
  switch (action.type) {
    // case SPIN_LOADING:
    //   // 全局loading
    //   return { ...state, spinLoading: action.spinLoading }
    // case UPDATE_TOPATH:
    //   // 登陆后跳转地址
    //   return { ...state, toPath: action.toPath }
    case UPDATE_ACCESSMENU:
      return {
        ...state,
        currentModule: action.currentModule,
        accessMenu: action.accessMenu,
        openAccessMenu: action.openAccessMenu,
        moduleMenu: action.moduleMenu,
        moduleList: action.moduleList,
      };
    case UPDATE_MODULE:
      return {
        ...state,
        currentModule: action.currentModule,
        moduleMenu: action.moduleMenu,
      };
    default:
      return state;
  }
}
