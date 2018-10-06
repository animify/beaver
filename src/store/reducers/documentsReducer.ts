import produce from 'immer';
import { Action } from 'redux';
import parser from '../../parser';

const documentsReducer = produce((draft: StoreState['documents'], action: Action) => {
    switch (action.type) {
        default:
            return draft;
    }
}, parser.initialState.documents);

export default documentsReducer;
