import { HistoryStoreState } from '../types/module';

export const getModels = (state: HistoryStoreState) => state.view.present.models;
export const getModelOrder = (state: HistoryStoreState) => state.view.present.modelOrder;
export const getModel = (state: HistoryStoreState, props: { pid: string }) => getModels(state)[props.pid];

export const getDocuments = (state: StoreState) => state.documents;
export const getDocumentOrder = (state: StoreState) => state.documents.documentOrder;