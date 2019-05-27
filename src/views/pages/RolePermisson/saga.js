// import { takeEvery, call, put } from 'redux-saga/effects'
// import { errMsg, navSideSuccess } from './actions'
// import { fetchNavSideLists } from '../../api/store'
// import { isFetching } from '../../redux/actions'
// import * as navSide from './actionTypes'

// // worker saga
// function* getNavSideLists(data) {
//   // console.log('navSide-saga', data)
//   try {
//     yield put(isFetching({ viewType: navSide.ISFETCHING, data: { isFetching: true } }))
//     const resdata = yield call(fetchNavSideLists, {tab: data.payload.tab})
//     // console.log('navSide 返回的数据', resdata)
//     if (resdata.code === 0) {
//       yield put(navSideSuccess({...resdata, currentPage: data.payload.currentPage}))
//       yield put(isFetching({ viewType: navSide.ISFETCHING, data: { isFetching: false } }))
//     } else {
//       yield put(errMsg(resdata.msg))
//     }
//   } catch (e) {
//     yield put(errMsg(e))
//   }
// }
// // watch saga
// export function* watchNavSideLists() {
//   yield takeEvery(navSide.GETNAVSIDELISTS, getNavSideLists)
// }
