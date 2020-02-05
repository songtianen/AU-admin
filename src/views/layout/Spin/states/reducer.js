import * as r from './actionTypes';

// import * as common from "../../redux/constants"; // 公共状态

export default function(state, action) {
  if (!state) {
    state = {
      spinLoading: false,
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
