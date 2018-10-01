import produce from 'immer';
import parser from '../../parser';
import { Action } from 'redux';

const documentsReducer = produce((draft: StoreState['documents'], action: Action) => {
    switch (action.type) {
        default:
            return draft;
    }
}, parser.initialState.documents);

export default documentsReducer;

