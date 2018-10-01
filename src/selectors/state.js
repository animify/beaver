export const getModelOrder = state => state.view.present.modelOrder;
export const getModels = state => state.view.present.models;
export const getModel = (state, props) => getModels(state)[props.pid];