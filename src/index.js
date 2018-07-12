import React from 'react';
import {render} from "react-dom";
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);