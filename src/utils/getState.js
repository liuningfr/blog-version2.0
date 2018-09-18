const getState = (...modules) =>
  state => Object.assign({}, ...modules.map(module => state[module]));

export default getState;