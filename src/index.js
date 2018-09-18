import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import App from './App';
import './index.css';

const render = Component => {
  ReactDOM.render(
    <LocaleProvider locale={zhCN}>
      <Component />
    </LocaleProvider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => render(App));
}
