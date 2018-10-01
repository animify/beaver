export const getModelOrder = state => state.doc.present.modelOrder;
export const getModels = state => state.doc.present.models;
export const getModel = (state, props) => getModels(state)[props.modelId];