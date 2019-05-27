// import * as NS from './actionTypes'

// const initState = {
//   syncing: true,
//   currentPage: '',
// }
// export default function navSide(state = initState, action) { // eslint-disable-line
//   switch (action.type) {
//     case NS.ISFETCHING:
//       return {
//         ...state,
//         ...action.payload,
//       }
//     case NS.NAVSIDE_SUCCESS:
//       return {
//         ...state,
//         ...action.payload,
//         syncing: false,
//       }
//     case NS.ERROR_MSG:
//       return {
//         ...state,
//         syncing: true,
//         msg: action.msg,
//       }
//     default: return state
//   }
// }
