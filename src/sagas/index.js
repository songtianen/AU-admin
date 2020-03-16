import { all } from 'redux-saga/effects';

import { appSagas } from '../views/layout/redux/saga/saga_app';
import { loginSagas } from '../views/pages/Login/redux/saga';
import { roleSagas } from '../views/pages/Role/redux/saga';
import { headerSagas } from '../views/layout/Header/redux/saga';

export default function* rootSaga() {
  yield all([...loginSagas, ...roleSagas, ...appSagas, ...headerSagas]);
}
