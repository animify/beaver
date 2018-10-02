import { combineReducers } from 'redux';
import undoable, { groupByActionTypes, includeAction } from 'redux-undo';
import viewReducer from './viewReducer';
import documentsReducer from './documentsReducer';

export default combineReducers({
    view: undoable(viewReducer),
    documents: documentsReducer,
});
