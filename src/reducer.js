import createClassReducer from 'modules/App';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  createClass: createClassReducer,
});

export default reducer;
