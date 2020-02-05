import { actionTypes } from './actions';

// import * as common from "../../redux/constants"; // 公共状态

export default function(state, action) {
  if (!state) {
    state = {
      rolePagedList: '',
      statusCode: '',
      error: false,
      msg: '',
    };
  }
  switch (action.type) {
    case actionTypes.ROLE_PAGELIST:
      return {
        ...state,
        rolePagedList: action.payload,
      };
    default:
      return state;
  }
}
