import { takeEvery, call, put } from 'redux-saga/effects';
// import { createBrowserHistory } from 'history';
import { notification } from 'antd';
import { getRolePagedList } from '../../../../api';
import { actionTypes } from './actions';

function* GetRolePagedList(action) {
  try {
    const data = yield call(getRolePagedList, action.payload);
    console.log('请求角色列表======', data);
    if (data.statusCode === 200) {
      yield put({ type: actionTypes.ROLE_PAGELIST, payload: data.data });
    }
    if (data.statusCode === 500) {
      notification.error({
        message: '请求角色列表错误',
      });
    }
  } catch (error) {
    notification.error({
      message: error,
    });
  }
}

function* watchGetRolePagedList() {
  yield takeEvery(actionTypes.ROLE_PAGELIST, GetRolePagedList);
}

export const roleSagas = [watchGetRolePagedList()];
