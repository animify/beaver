import produce from 'immer';
import cuid from 'cuid';
import parser from '../../parser';

const viewReducer = produce((draft: StoreState['view'], action: ReducerAction) => {
    switch (action.type) {
        case 'DOCUMENT::CHANGE_BOARD':
            draft.models = action.payload.models;
            draft.modelOrder.length = 0;
            draft.modelOrder = Object.keys(action.payload.models);
            break;

        case 'DOCUMENT::DUPLICATE_SELECTED':
            const a = draft.selected.length === 0 ? draft.modelOrder : draft.selected;
            const newIds = a.map((pid) => {
                const shortId = cuid();
                const newId = `${draft.models[pid].type}${shortId}`;
                draft.models[newId] = {
                    ...draft.models[pid],
                    pid: shortId,
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

