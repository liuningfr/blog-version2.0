import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import blogReducer from './reducers/blog';
import articleReducer from './reducers/article';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({ blogReducer, articleReducer }),
  composeEnhancers(applyMiddleware(thunk)),
);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => render(App));
}
