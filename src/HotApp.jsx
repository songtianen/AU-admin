import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import PageRouter from './routers/PageRouters';
import store from './store';
import Spin from './views/layout/Spin';

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
