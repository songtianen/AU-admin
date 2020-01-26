import { all } from 'redux-saga/effects';

import { loginSagas } from '../views/pages/Login/states/saga';
import { roleSagas } from '../views/pages/Role/states/saga';

export default function* rootSaga() {
  yield all([...loginSagas, ...roleSagas]);
}
