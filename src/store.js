import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux';
// import rootSaga from './sagas';

export const sagaMiddleware = createSagaMiddleware();
let middleWare = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer =
  // eslint-disable-next-line no-undef
  WEBPACK_ENV === 'production'
    ? applyMiddleware(...middleWare)
    : composeEnhancers(applyMiddleware(...middleWare));
const store = createStore(rootReducer, enhancer);
// sagaMiddleware.run(rootSaga);
export default store;
