import { combineReducers } from 'redux';
import undoable, { includeAction, groupByActionTypes } from 'redux-undo';
import docReducer from './docReducer';

export default combineReducers({
    doc: undoable(docReducer),
    // doc: undoable(docReducer, { groupBy: groupByActionTypes('MODEL::UPDATE'), filter: includeAction(['MODEL::UPDATE']) }),
});
