import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { formReducer } from 'react-controlled-form';

export default function configureStore() {
  return createStore(
    combineReducers({
      form: formReducer,
    }),
    composeWithDevTools(),
  );
}
