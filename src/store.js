// these are pretty integral to the redux cycle
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { endGame, leveler, gameFlow } from './middleware/tetrisMiddleware';

import RootReducer from './reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger, endGame, gameFlow, leveler)
  )
);

export default configureStore;
