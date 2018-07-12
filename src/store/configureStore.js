import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

const enhancers = [thunk, logger]

export default function configureStore() {
	const store = createStore(allReducers , composeWithDevTools(
		applyMiddleware(
			...enhancers
		)));
	return store;
}
