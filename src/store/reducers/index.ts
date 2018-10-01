import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import viewReducer from './viewReducer';
import documentsReducer from './documentsReducer';

export default combineReducers({
    view: undoable(viewReducer),
    documents: documentsReducer,
});
