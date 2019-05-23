import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Forms, Search, Publications } from 'oicr-ui-core';
import coreReducers from '../core/reducers';
import coreMiddlewares from '../core/middlewares';

import { categoryFilterReducer, typeFilterReducer, institutionFilterReducer, speakersImagesReducer} from './reducers';

const initialState = {
    // Initial Values
};

const combinedReducers = combineReducers(
    Object.assign({}, coreReducers, {
        categoryFilter: categoryFilterReducer,
        typeFilter: typeFilterReducer,
        institutionFilter: institutionFilterReducer,
        speakersImages: speakersImagesReducer,
    }),
);

const composedMiddlewares = compose(
    applyMiddleware(...coreMiddlewares),
    process.env.NODE_ENV === 'production'
        ? f => f
        : window.devToolsExtension
        ? window.devToolsExtension()
        : f => f,
);

export default createStore(combinedReducers, initialState, composedMiddlewares);
