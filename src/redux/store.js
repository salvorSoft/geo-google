/* eslint-disable no-undef */
import { createStore, combineReducers, compose } from 'redux';

import { app } from './ducks';

const reducers = combineReducers({ geoMapApp: app });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const store = createStore(reducers, composeEnhancers());

export default store;
