import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import combineReducers from './redux/index';

const store = createStore(combineReducers);
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'))