import createReducer from '@/utils/createReducer';

// constants
const SET_STATE = 'SET_STATE';

// state
const defaultState = {
  detail: {},
};

// reducer
const reducer = {
  [SET_STATE]: (state, { type, ...data }) => ({ ...state, ...data }),
};
const setState = data => dispatch => { dispatch({ type: SET_STATE, ...data }); };

// actions
const actions = {
  getArticle: (id) => async (dispatch) => {
    await fetch(`/api/getdetail?id=${id}`).then(response => response.json()).then(result => {
      const data = result[0];
      dispatch(setState({ detail: data }));
    });
  },
};

export default {
  reducer: createReducer(defaultState, reducer),
  actions,
};

