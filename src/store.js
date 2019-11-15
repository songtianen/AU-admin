// import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducer';
// import rootSaga from './saga/index';

// const sagaMiddleware = createSagaMiddleware();
// let middleWare = [sagaMiddleware];

// eslint-disable-next-line no-undef
console.log('WEBPACK_ENV的11111----00000', WEBPACK_ENV);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer =
  // eslint-disable-next-line no-undef
  WEBPACK_ENV === 'production'
    ? compose(applyMiddleware())
    : composeEnhancers(applyMiddleware());
const store = createStore(rootReducer, enhancer);
// sagaMiddleware.run(rootSaga);
export default store;
