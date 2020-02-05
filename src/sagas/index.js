import { all } from 'redux-saga/effects';

import { appSagas } from '../redux/saga/saga_app';
import { loginSagas } from '../views/pages/Login/redux/saga';
import { roleSagas } from '../views/pages/Role/redux/saga';

export default function* rootSaga() {
  yield all([...loginSagas, ...roleSagas, ...appSagas]);
}
