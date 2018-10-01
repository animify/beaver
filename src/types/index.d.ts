interface StoreState {
    view: {
        document: string;
        modelOrder: Model['pid'][];
        models: Model[];
        selected: Model['pid'][];
        hovering: Model['pid'];
    } & {
        present: StoreState['view'],
    },
    documents: {
        all: Doc[],
        documentOrder: Doc['pid'][];
    } & {
        present: StoreState['documents'],
    },
}

interface Model {
    pid: string;
    [index: string]: any;
}

interface Doc {
    pid: string;
    [index: string]: any;
}

interface ReducerAction {
    id: string;
    type: string;
    payload: any;
}