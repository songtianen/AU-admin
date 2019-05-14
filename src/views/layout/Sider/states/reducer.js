import * as r from './actionTypes';

// import * as common from "../../redux/constants"; // 公共状态

export default function(state, action) {
  if (!state) {
    state = {
      spinLoading: false,
      // toPath: '/',
      // currentModule: '', // 当前模块
      // accessMenu: [], // 可访问的菜单,
      // openAccessMenu: [], // 展开的可访问的菜单(子级包含父级name)
      // moduleList: [], // 模块列表
      // moduleMenu: [], // 模块菜单
    };
  }
  switch (action.type) {
    case r.SPIN_LOADING:
      // 全局loading
      return { ...state, spinLoading: action.spinLoading };
    default:
      return state;
  }
}
