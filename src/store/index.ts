import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import parser from '../parser';

let enhancer = null;

if (process.env.NODE_ENV !== 'production') {
    enhancer = require('redux-devtools-extension').composeWithDevTools();
} else {
    enhancer = applyMiddleware();
}

// if (process.env.NODE_ENV !== 'production') {
//     const { whyDidYouUpdate } = require('why-did-you-update');
//     whyDidYouUpdate(React);
// }

console.log(parser)

const store = createStore(
    rootReducer,
    parser.initialState,
    enhancer
);

export default store;
