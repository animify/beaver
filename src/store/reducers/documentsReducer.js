import produce from 'immer';
import parser from '../../parser';

const documentsReducer = produce((draft, action) => {
    switch (action.type) {
        default:
            return draft;
    }
}, parser.initialState.documents);

export default documentsReducer;

