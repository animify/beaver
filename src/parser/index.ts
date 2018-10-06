import { IHistoryStoreState } from '../types/module';
import sample from './sample';

console.log(sample);

interface IParserDefault {
    sample: any;
    initialState: IHistoryStoreState | StoreState;
}

export default {
    initialState: {
        documents: {
            all: sample.documents,
            documentOrder: Object.keys(sample.documents),
        },
        status: {
            create: null,
        },
        view: {
            document: sample.visibleDocument,
            hovering: null,
            modelOrder: Object.keys(sample.documents[sample.visibleDocument].models),
            models: sample.documents[sample.visibleDocument].models,
            selected: [],
        },
    },
    sample,
} as IParserDefault;
