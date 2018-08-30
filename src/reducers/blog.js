// action types
const INIT_LIST = 'INIT_LIST';
const INIT_USER = 'INIT_USER';

// reducer
export default (state = {
  list: [],
  name: '',
}, action) => {
  switch (action.type) {
    case INIT_LIST:
      // 初始化文章列表
      return { list: action.list };
    case INIT_USER:
      return { name: action.name };
    default:
      return state;
  }
};

// action creators
export const actions = {
  initList: () => async (dispatch) => {
    await fetch('/list').then(response => response.json()).then(result => {
      const data = result || [];
      dispatch({ type: INIT_LIST, list: data });
    }).catch(err => console.log(err));
  },
  initUser: () => ({ type: INIT_USER, name: '刘宁Leo' }),
};
