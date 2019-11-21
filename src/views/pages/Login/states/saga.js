import { takeEvery, call, put } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import { notification } from 'antd';
import { loginByUsername, loginRegister } from '../../../../api';
import { setToken } from '../../../../util/token';
import { actionTypes } from './actions';

let history = createBrowserHistory({
  forceRefresh: true,
});

function* fetchUser(action) {
  try {
    const userInfo = yield call(loginByUsername, action.payload);
    if (userInfo.statusCode === 200 && userInfo.data.accessToken) {
      yield put({ type: actionTypes.LOGIN_SUCCESS, payload: userInfo });
      setToken(userInfo.data.accessToken);
      history.push('/');
    }
    if (userInfo.statusCode === 500) {
      yield put({ type: actionTypes.LOGIN_ERROR, payload: userInfo });
    }
  } catch (error) {
    notification.error({
      message: error,
    });
  }
}

function* register(action) {
  try {
    const userInfo = yield call(loginRegister, action.payload);
    if (userInfo.statusCode === 200 && userInfo.data.accessToken) {
      yield put({ type: actionTypes.REGISTER_SUCCESS, payload: userInfo });
      setToken(userInfo.data.accessToken);
      history.push('/');
    }
    if (userInfo.statusCode === 500) {
      yield put({ type: actionTypes.LOGIN_ERROR, payload: userInfo });
    }
  } catch (error) {
    notification.error({
      message: error,
    });
  }
}

function* watchFetchUser() {
  yield takeEvery(actionTypes.DO_LOGIN, fetchUser);
}
function* watchRegister() {
  yield takeEvery(actionTypes.DO_REGISTER, register);
}

export const loginSagas = [watchFetchUser(), watchRegister()];
