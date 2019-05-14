import { all, fork } from 'redux-saga/effects';

import Test from '../views/pages/TestRudex';

export default function* rootSaga() {
  yield all([...Object.values(Test.saga)].map(fork));
}
