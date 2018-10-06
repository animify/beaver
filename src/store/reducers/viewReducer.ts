import * as cuid from 'cuid';
import produce from 'immer';
import parser from '../../parser';
import { IHistoryStoreState } from '../../types/module';

const viewReducer = produce((draft: IHistoryStoreState['view'], action: ReducerAction) => {
    switch (action.type) {
        case 'MODEL::UPDATE':
            draft.models[action.payload.id] = {
                ...draft.models[action.payload.id],
                ...action.payload.props,
            };
            break;

        case 'DOCUMENT::CHANGE_BOARD':
            draft.selected.length = 0;
            draft.models = action.payload.models;
            draft.modelOrder.length = 0;
            draft.modelOrder = Object.keys(action.payload.models);
            break;

        case 'DOCUMENT::DUPLICATE_SELECTED':
            const a = draft.selected.length === 0 ? draft.modelOrder : draft.selected;
            const newIds = a.map(pid => {
                const shortId = cuid();
                const newId = `${draft.models[pid].type}${shortId}`;
                draft.models[newId] = {
                    ...draft.models[pid],
                    pid: shortId,
                    position: {
                        x: draft.models[pid].position.x + 250,
                        y: draft.models[pid].position.y + 250,
                    },
                };

                return newId;
            });

            console.log('total', draft.modelOrder.length);

            draft.selected = newIds;
            draft.modelOrder = [...draft.modelOrder, ...newIds];
            break;
    }

    return draft;
}, parser.initialState.view);

export default viewReducer;
