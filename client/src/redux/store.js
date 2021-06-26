import { createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { getSettings } from './middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(getSettings))); 