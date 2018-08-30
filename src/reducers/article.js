// action types
const GET_ARTICLE = 'GET_ARTICLE';

// reducer
export default (state = {
  detail: {},
}, action) => {
  switch (action.type) {
    case GET_ARTICLE:
      // 获取文章详情
      return { detail: action.detail };
    default:
      return state;
  }
};

// action creators
export const actions = {
  getArticle: (id) => async (dispatch) => {
    await fetch('/getdetail', {
      method: 'post',
      body: JSON.stringify({ id }),
    }).then(response => response.json()).then(result => {
      const data = result[0];
      dispatch({ type: GET_ARTICLE, detail: data });
    });
  },
};
