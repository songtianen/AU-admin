import { combineReducers } from 'redux';

import spin from '../../views/layout/Spin';
import app from '../redux_app';
import user from '../redux_user';

// console.log('user', ...user)

// reducer 的入口文件
const rootReducer = combineReducers({
  [user.constants.NAME_USER]: user.reducer,
  [app.constants.NAME]: app.reducer,
  [spin.constants.NAME]: spin.reducer,
});
export default rootReducer;
