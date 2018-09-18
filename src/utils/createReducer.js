/**
 * createReducer - 绑定 action type 与对应的 handler
 * @link http://cn.redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html
 */
const createReducer = (initialState, handlers) =>
  (state = initialState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };

export default createReducer;
