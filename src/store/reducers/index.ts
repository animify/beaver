import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import documentsReducer from './documentsReducer';
import statusReducer from './statusReducer';
import viewReducer from './viewReducer';

export default combineReducers({
    documents: documentsReducer,
    status: statusReducer,
    view: undoable(viewReducer),
});
