import createReducer from '@/utils/createReducer';

// constants
const SET_STATE = 'SET_STATE';

// state
const defaultState = {
  list: [],
  name: '',
};

// reducer
const reducer = {
  [SET_STATE]: (state, { type, ...data }) => ({ ...state, ...data }),
};
const setState = data => dispatch => { dispatch({ type: SET_STATE, ...data }); };

// actions
const actions = {
  initList: () => async dispatch => {
    await fetch('/api/list').then(response => response.json()).then(result => {
      const data = result || [];
      dispatch(setState({ list: data }));
    }).catch(err => console.log(err));
  },
  initUser: () => dispatch => dispatch(setState({ name: '刘宁Leo' })),
};

export default {
  reducer: createReducer(defaultState, reducer),
  actions,
};

