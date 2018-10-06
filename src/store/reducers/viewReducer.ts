import * as cuid from 'cuid';
import produce from 'immer';
import { ActionType, getType } from 'typesafe-actions';
import parser from '../../parser';
import { IHistoryStoreState } from '../../types/module';
import * as viewActions from '../actions/view';

export type ViewAction = ActionType<typeof viewActions>;

const viewReducer = produce((draft: IHistoryStoreState['view'], action: ViewAction) => {
    switch (action.type) {
        case getType(viewActions.newModel):
            draft.models[action.payload.props.pid] = action.payload.props;
            draft.modelOrder = [...draft.modelOrder, action.payload.props.pid];
            break;

        case getType(viewActions.selectModel):
            draft.models[action.payload.pid].selected = true;
            break;

        case getType(viewActions.toggleSelectModel):
            if (action.payload.deselectAll) {
                Object.values(draft.models)
                    .filter(m => m.selected && m.pid !== action.payload.pid)
                    .forEach(m => (m.selected = false));
            }

            draft.models[action.payload.pid].selected = true;
            break;

        case getType(viewActions.updateModel):
            draft.models[action.payload.pid] = {
                ...draft.models[action.payload.pid],
                ...action.payload.props,
            };
            break;

        case getType(viewActions.setEntities):
            draft.selected.length = 0;
            draft.models = action.payload.models;
            draft.modelOrder.length = 0;
            draft.modelOrder = Object.keys(action.payload.models);
            break;

        case getType(viewActions.duplicateSelected):
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
