import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './store'
import { createStore, applyMiddleware } from 'redux'

ReactDOM.render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunkMiddleware))}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
