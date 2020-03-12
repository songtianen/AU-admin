import { takeEvery, call, put } from 'redux-saga/effects';
// import { createBrowserHistory } from 'history';

import { loginByUsername, loginRegister } from '../../../../api';
import { setToken, getToken } from '../../../../util/token';
import { actionTypes } from './actions';

// let history = createBrowserHistory({
//   forceRefresh: false,
// });

function* fetchUser(action) {
  try {
    yield put({ type: actionTypes.BEFORE_LOGIN, payload: {} });
    const userInfo = yield call(loginByUsername, action.payload);
    // console.log('登陆', userInfo);
    if (userInfo.statusCode === 200 && userInfo.data.accessToken) {
      let setTokens = new Promise((resolve) => {
        setToken(userInfo.data.accessToken);
        const token = getToken();
        return resolve(token);
      });

      yield put({ type: actionTypes.LOGIN_SUCCESS, payload: userInfo });
      setTokens.then((doc) => {
        // history.push('/');

        console.log('setToken', doc);
      });
    }
    if (userInfo.statusCode === 500) {
      yield put({ type: actionTypes.LOGIN_ERROR, payload: userInfo });
    }
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_ERROR, payload: error });
  }
}

function* register(action) {
  try {
    yield put({ type: actionTypes.BEFORE_LOGIN, payload: {} });
    const userInfo = yield call(loginRegister, action.payload);
    if (userInfo.statusCode === 200 && userInfo.data.accessToken) {
      setToken(userInfo.data.accessToken);
      yield put({ type: actionTypes.REGISTER_SUCCESS, payload: userInfo });
      // history.push('/');
    }
    if (userInfo.statusCode === 500) {
      yield put({ type: actionTypes.LOGIN_ERROR, payload: userInfo });
    }
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_ERROR, payload: error });
  }
}

function* watchFetchUser() {
  yield takeEvery(actionTypes.DO_LOGIN, fetchUser);
}
function* watchRegister() {
  yield takeEvery(actionTypes.DO_REGISTER, register);
}

export const loginSagas = [watchFetchUser(), watchRegister()];
