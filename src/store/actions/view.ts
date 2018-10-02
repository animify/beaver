export const updateModel = (pid: Model['pid'], props: Partial<Model>) => ({
    type: 'MODEL::UPDATE',
    payload: {
        id: pid,
        props
    }
});

export const duplicateSelected = () => ({
    type: 'DOCUMENT::DUPLICATE_SELECTED'
});

export const setEntities = (id: string, models: Model) => ({
    type: 'DOCUMENT::CHANGE_BOARD',
    payload: {
        id,
        models
    }
});