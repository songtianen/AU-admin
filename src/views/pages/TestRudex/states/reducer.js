import * as r from './actionTypes';

// import * as common from "../../redux/constants"; // 公共状态

const initState = {
  num: 0,
};
export default function user(state = initState, action) {
  switch (action.type) {
    case r.ADD:
      return {
        ...state,
        num: state.num + 1,
      };
    // case common.ClEARSTATES:
    //   return Object.assign({}, action.payload);
    // // return {
    // //   ...state,
    // //   ...action.payload,
    // // }
    // case r.ERROR_MSG:
    //   return {
    //     ...state,
    //     msg: action.msg
    //   };
    default:
      return state;
  }
}
