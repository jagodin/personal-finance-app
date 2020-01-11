import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { cacheEnhancer } from 'redux-cache';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        cacheEnhancer({ log: true }),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
    )
);

export default store;
