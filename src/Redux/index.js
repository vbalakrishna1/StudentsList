import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './Reducers';

export default () => {
  return createStore(rootReducer, {}, compose(applyMiddleware(thunk)))
}
