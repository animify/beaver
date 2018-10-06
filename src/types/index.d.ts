interface StoreState {
    view: {
        document: string;
        modelOrder: Array<Model['pid']>;
        models: {
            [index: string]: Model;
        };
        selected: Array<Model['pid']>;
        hovering: Model['pid'] | null;
    };
    documents: {
        all: Documents;
        documentOrder: string[];
    };
}

interface Model {
    pid: string;
    title: string;
    position: {
        x: number;
        y: number;
    };
    size: {
        h: number;
        w: number;
    };
    type: string;
}

interface Image extends Model {
    image: string;
}

interface Screen extends Image {}

interface Documents {
    [index: string]: {
        models: {
            [index: string]: Model;
        };
        order: number;
        title: string;
    };
}

interface ReducerAction {
    id: string;
    type: string;
    payload: any;
}
