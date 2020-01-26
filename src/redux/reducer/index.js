import { combineReducers } from 'redux';

import spin from '../../views/layout/Spin';
import login from '../../views/pages/Login/states/reducer';
import role from '../../views/pages/Role/states/index';

import app from '../redux_app';
import user from '../redux_user';

// console.log('user', role.constants.NAME, role.reducer);

// reducer 的入口文件
const rootReducer = combineReducers({
  // [user.constants.NAME_USER]: user.reducer,
  [user.constants.NAME_USER]: login,
  [role.constants.NAME]: role.reducer,
  [app.constants.NAME]: app.reducer,
  [spin.constants.NAME]: spin.reducer,
});
export default rootReducer;
