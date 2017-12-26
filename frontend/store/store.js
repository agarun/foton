import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; /* TODO: OMIT IN PRODUCTION */
import { compose } from 'redux'; /* TODO: OMIT IN PRODUCTION */

const middlewares = [
  thunk,
  logger /* TODO: OMIT IN PRODUCTION */
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; /* TODO: OMIT IN PRODUCTION */

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
);

export default configureStore;
