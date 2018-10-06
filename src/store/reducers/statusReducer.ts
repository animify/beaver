import produce from 'immer';
import { ActionType, getType } from 'typesafe-actions';
import parser from '../../parser';
import * as statusActions from '../actions/status';

export type StatusAction = ActionType<typeof statusActions>;

const statusReducer = produce((draft: StoreState['status'], action: StatusAction) => {
    switch (action.type) {
        case getType(statusActions.newShape):
            break;
    }

    return draft;
}, parser.initialState.status);

export default statusReducer;
