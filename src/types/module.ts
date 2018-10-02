import { StateWithHistory } from "redux-undo";

export interface HistoryStoreState {
    view: StoreState['view'] & StateWithHistory<StoreState['view']>,
    documents: StoreState['documents']
}