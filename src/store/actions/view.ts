export const updateModel = (pid: Model['pid'], props: Partial<Model>) => ({
    payload: {
        id: pid,
        props,
    },
    type: 'MODEL::UPDATE',
});

export const duplicateSelected = () => ({
    type: 'DOCUMENT::DUPLICATE_SELECTED',
});

export const setEntities = (id: string, models: Model) => ({
    payload: {
        id,
        models,
    },
    type: 'DOCUMENT::CHANGE_BOARD',
});
