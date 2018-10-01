import produce from 'immer';
import parser from '../../parser';

const doc = produce((draft, action) => {
    switch (action.type) {
        case 'MODEL::UPDATE':
            draft.models[action.id] = {
                ...draft.models[action.id],
                ...action.payload
            };
            break;
        default:
            return draft;
    }
}, parser.initialState.doc);

export default doc;

