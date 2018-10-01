import produce from 'immer';
import cuid from 'cuid';
import parser from '../../parser';

const viewReducer = produce((draft: StoreState['view'], action: ReducerAction) => {
    switch (action.type) {
        case 'MODEL::UPDATE':
            draft.models[action.id] = {
                ...draft.models[action.id],
                ...action.payload
            };
            break;
        case 'DOCUMENT::DUPLICATE_SELECTED':
            const a = draft.selected.length === 0 ? draft.modelOrder : draft.selected;
            const newIds = a.map((pid) => {
                const shortId = cuid();
                const newId = `${draft.models[pid].type}${shortId}`;
                draft.models[newId] = {
                    ...draft.models[pid],
                    id: shortId,
                    position: {
                        x: draft.models[pid].position.x + 250,
                        y: draft.models[pid].position.y + 250,
                    }
                };

                return newId;
            });

            console.log('total', draft.modelOrder.length);

            draft.selected = newIds;
            draft.modelOrder = [...draft.modelOrder, ...newIds];
            break;
        default:
            return draft;
    }
}, parser.initialState.view);

export default viewReducer;

