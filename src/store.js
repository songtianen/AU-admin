import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducer';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
let middleWare = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleWare));
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);
export default store;
