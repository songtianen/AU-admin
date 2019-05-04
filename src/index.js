import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import App from './HotApp';
import './index.less';

OfflinePluginRuntime.install();
ReactDOM.render(
  <App />, document.getElementById('root'),
);
