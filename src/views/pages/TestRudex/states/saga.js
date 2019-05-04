import { takeEvery, call } from 'redux-saga/effects'; // call, put
import { add } from './actions';
// import { errMsg, registerSuccess } from "./actions";
// import { clearStates } from "../../redux/actions";
// import { ClEARSTATES } from "../../redux/constants";
import * as r from './actionTypes';

// worker saga
// eslint-disable-next-line require-yield
function* dooRegister(data) {
  console.log('saga', data);
  try {
    yield call(add, data.payload);
    // const DecryptResData = resData.DecryptResData;
    // if (DecryptResData.code === 0) {
    // yield put(clearStates({ viewType: ClEARSTATES, data: { code: 0 } }));
    // yield put(registerSuccess({ ...DecryptResData }));
    // } else {
    // yield put(errMsg(DecryptResData.msg));
    // }
  } catch (e) {
    console.log('saga出错', e);
    // yield put(errMsg(e.message));
  }
}
// watch saga //1.监听action 2.执行dooRegister
export function* watchDoRegister() {
  yield takeEvery(r.ADD, dooRegister);
}
