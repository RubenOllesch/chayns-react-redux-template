import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers';


async function init() {
    await chayns.ready;

    const middlewares = [thunk];

    if (__DEV__ || __STAGING__) {
        // eslint-disable-next-line global-require
        const { createLogger } = require('redux-logger');
        const reduxLogger = createLogger({
            duration: true
        });
        middlewares.push(reduxLogger);
    }

    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.querySelector('.tapp')
    );
}

init();
