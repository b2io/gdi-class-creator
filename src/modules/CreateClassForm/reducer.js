import { handleActions } from 'redux-actions';
import { submit } from './actions';

const defaultState = {};

const reducer = handleActions(
  {
    [submit]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  defaultState,
);

export default reducer;
