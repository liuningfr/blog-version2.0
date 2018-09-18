import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// module reducers
import blog from './blog/list';
import article from './article/detail';

const models = {
  blog,
  article,
};

const rootReducers = {};
const rootActions = {};

Object.keys(models).forEach(name => {
  const { reducer, actions } = models[name];
  rootReducers[name] = reducer;
  rootActions[name] = actions;
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(rootReducers),
  composeEnhancers(applyMiddleware(thunk)),
);

const { dispatch, getState } = store;
Object.assign(dispatch, rootActions);

export { dispatch, getState };
export default store;