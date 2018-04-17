import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import registerServiceWorker from './registerServiceWorker';

if(!window.Promise) {
    window.Promise = Promise;
}

const middleWare = [];
middleWare.push(thunk);
const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware);

const store = createStore(rootReducer, applyMiddleware(...middleWare));
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,document.getElementById('root'));
/*ReactDOM.render(

        <App />,document.getElementById('root'));*/
registerServiceWorker();
