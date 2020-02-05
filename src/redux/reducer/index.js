import { combineReducers } from 'redux';

import spin from '../../views/layout/Spin';
import login from '../../views/pages/Login/redux';
import role from '../../views/pages/Role/redux/index';

import app from '../redux_app';

// console.log('user', role.constants.NAME, role.reducer);

// reducer 的入口文件
const rootReducer = combineReducers({
  // [user.constants.NAME_USER]: user.reducer,
  [login.constants.NAME]: login.reducer,
  [role.constants.NAME]: role.reducer,
  [app.constants.NAME]: app.reducer,
  [spin.constants.NAME]: spin.reducer,
});
export default rootReducer;
