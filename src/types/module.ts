import { StateWithHistory } from "redux-undo";

export interface IHistoryStoreState {
    view: StoreState['view'] & StateWithHistory<StoreState['view']>,
    documents: StoreState['documents']
}