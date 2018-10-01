export const getModels = (state: StoreState) => state.view.present.models;
export const getModelOrder = (state: StoreState) => state.view.present.modelOrder;
export const getModel = (state: StoreState, props: { pid: string }) => getModels(state)[props.pid];

export const getDocuments = (state: StoreState) => state.documents;
export const getDocumentOrder = (state: StoreState) => state.documents.documentOrder;