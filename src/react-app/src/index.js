import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
//import registerServiceWorker from './registerServiceWorker';

if(!window.Promise) {
    window.Promise = Promise;
}

const store = createStore(rootReducer, applyMiddleware(thunk));
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,document.getElementById('root'));
/*ReactDOM.render(

        <App />,document.getElementById('root'));*/
//registerServiceWorker();
