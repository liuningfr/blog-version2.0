import { bindActionCreators } from 'redux';

const getActions = (...modules) => dispatch => {
  const actions = Object.assign({}, ...modules.map(module => module.actions));
  return bindActionCreators(actions, dispatch);
};

export default getActions;
