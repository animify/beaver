import { applyMiddleware, createStore } from 'redux';
import parser from '../parser';
import { IHistoryStoreState } from '../types/module';
import rootReducer from './reducers';

let enhancer = null;

if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line:no-var-requires
    enhancer = require('redux-devtools-extension').composeWithDevTools();
} else {
    enhancer = applyMiddleware();
}

const store = createStore(rootReducer, parser.initialState as IHistoryStoreState, enhancer);

export default store;
