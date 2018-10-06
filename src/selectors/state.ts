import { IHistoryStoreState } from '../types/module';

export const getModels = (state: IHistoryStoreState) => state.view.present.models;
export const getModelOrder = (state: IHistoryStoreState) => state.view.present.modelOrder;
export const getModel = (state: IHistoryStoreState, props: { pid: string }) => getModels(state)[props.pid];

export const getDocuments = (state: StoreState) => state.documents;
export const getDocumentOrder = (state: StoreState) => state.documents.documentOrder;
