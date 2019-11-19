import { all } from 'redux-saga/effects';

import { loginSagas } from '../views/pages/Login/states/saga';

export default function* rootSaga() {
  yield all([...loginSagas]);
}
