type ModelInstance = 'document' | 'frame' | 'image' | 'shape' | 'text';

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
    name: string;
    position: {
        x: number;
        y: number;
    };
    size: {
        h: number;
        w: number;
    };
    type: ModelInstance;
}

interface Models {
    [index: string]: Model;
}

interface Image extends Model {
    image: string;
}

interface Screen extends Image {}

interface Documents {
    [index: string]: {
        models: Models;
        order: number;
        name: string;
    };
}

interface ReducerAction {
    id: string;
    type: string;
    payload: any;
}
