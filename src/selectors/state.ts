export const getModelOrder = (state: StoreState) => state.view.present.modelOrder;
export const getModels = (state: StoreState) => state.view.present.models;
export const getModel = (state: StoreState, props: Model) => getModels(state)[props.pid];