/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
import { takeEvery, call, put } from 'redux-saga/effects';

import { actionTypes } from './actions';

// let history = createBrowserHistory({
//   forceRefresh: false,
// });

function* initMenu(action) {
  const { moduleList, pathname } = action.payload;

  console.log('HeaderComponent_saga_initMenu_data', moduleList, pathname);
}

function* watchinitMenu() {
  yield takeEvery(actionTypes.INIT_MENU, initMenu);
}

export const headerSagas = [watchinitMenu()];
