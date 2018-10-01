import produce from 'immer';
import parser from '../../parser';

const viewReducer = produce((draft: StoreState['view'], action: ReducerAction) => {
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
}, parser.initialState.view);

export default viewReducer;

