import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'react-thunk';

let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;