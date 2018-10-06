import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import documentsReducer from './documentsReducer';
import viewReducer from './viewReducer';

export default combineReducers({
    documents: documentsReducer,
    view: undoable(viewReducer),
});
