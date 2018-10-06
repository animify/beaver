type ModelInstance = 'document' | 'frame' | 'image' | 'shape' | 'text';
type ShapeInstance = 'rect' | 'ellipse' | 'polygon';

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
    status: {
        create: {
            active: boolean;
            type: ModelInstance;
            x: number;
            y: number;
            w: number;
            h: number;
        } | null;
    };
}

interface Model {
    pid: string;
    name: string;
    position: Point;
    size: Size;
    selected?: boolean;
    type: ModelInstance;
}

interface Point {
    x: number;
    y: number;
}

interface Size {
    w: number;
    h: number;
}

interface Models {
    [index: string]: Model;
}

interface Image extends Model {
    image: string;
}

interface Shape extends Model {
    shape: ShapeInstance;
}

interface Frame extends Image {}

interface Documents {
    [index: string]: {
        models: Models;
        order: number;
        name: string;
    };
}
