import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './redux/index';
import thunk from 'redux-thunk';
const store = createStore(combineReducers,applyMiddleware(thunk));
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'))