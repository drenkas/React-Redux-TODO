import React from 'react';
import {render} from "react-dom";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';
import WebPage from './components/WebPage'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';

const enhancers = [thunk, logger]

const store = createStore(allReducers , composeWithDevTools(
 applyMiddleware(
	...enhancers
  )));

render(
	<Provider store={store}>
		<BrowserRouter>
			<WebPage/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);