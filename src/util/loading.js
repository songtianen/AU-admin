import { message } from 'antd';
import store from '../store';
import Spin from '../views/layout/Spin';

const loading = {};
const { spinLoading } = Spin.actions;

let hide = false;

let lastRequest = new Date('2018');

loading.show = function(config) {
  if (config && config.loading) {
    let now = new Date();
    let ms = now - lastRequest;
    lastRequest = now;
    if (ms > 2000) {
      if (config.loading === 'message') {
        hide = message.loading('请求中...', 0);
      } else if (config.loading === 'spin') {
        store.dispatch(spinLoading(true));
      }
    }
  }
};

loading.hide = function(config) {
  if (config && config.loading) {
    if (config.loading === 'message' && hide) {
      setTimeout(hide, 1000);
    } else if (config.loading === 'spin') {
      setTimeout(() => {
        store.dispatch(spinLoading(false));
      }, 1000);
    }
  }
};

export default loading;
