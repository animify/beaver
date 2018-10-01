interface StoreState {
    view: {
        document: string;
        modelOrder: Model['pid'][];
        models: {
            [index: string]: Model;
        };
        selected: Model['pid'][];
        hovering: Model['pid'];
    } & {
        present: StoreState['view'],
    },
    documents: {
        all: Doc[],
        documentOrder: Doc['pid'][];
    },
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

interface Screen extends Image {
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