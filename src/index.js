import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxPromise from 'redux-promise';

// const theStore = createStore(reducers);
const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)(reducers);

ReactDOM.render(
	<Provider store={theStoreWithMiddleware}>
		<App />
	</Provider>,
	document.getElementById('root')
);
