import React from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import store from '@/store';
import Loading from '@/layouts/Loading';
import BasicLayout from '@/layouts/BasicLayout';

// 动态加载函数
const load = loader => Loadable({ loader, loading: Loading });

const List = load(() => import('./containers/List'));
const Me = load(() => import('./containers/Me'));
const Article = load(() => import('./containers/Article'));


const App = () => (
  <Provider store={store}>
    <Router>
      <BasicLayout>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/me" component={Me} />
          <Route exact path="/articles/:id" component={Article} />
        </Switch>
      </BasicLayout>
    </Router>
  </Provider>
);


export default App;
