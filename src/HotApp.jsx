import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import PageRouter from './routers/PageRouters';
import store, { sagaMiddleware } from './store';
import Spin from './views/layout/Spin';
import rootSaga from './sagas';

// (在这里引用saga))解决循环依赖的问题
sagaMiddleware.run(rootSaga);

const MySpin = Spin.Spin;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <MySpin>
          <PageRouter />
        </MySpin> */}
        <MySpin pageRouters={PageRouter} />
      </Provider>
    );
  }
}

export default hot(App);
