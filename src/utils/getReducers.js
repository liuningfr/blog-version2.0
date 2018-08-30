const getReducers = modules => Object.keys(modules).reduce((obj, key) => {
  obj[key] = modules[key].reducer;
  return obj;
}, {});

export default getReducers;
