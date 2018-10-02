import sample from './sample.json';
import { HistoryStoreState } from '../types/module';

interface ParserDefault {
    sample: {
        visibleDocument: string;
        documents: {
            [index: string]: {
                models: {
                    [index: string]: Model
                }
            }
        }
    }
    initialState: HistoryStoreState;
}

export default {
    sample,
    initialState: {
        view: {
            document: sample.visibleDocument,
            modelOrder: Object.keys(sample.documents[sample.visibleDocument].models),
            models: sample.documents[sample.visibleDocument].models,
            selected: [],
            hovering: null,
        },
        documents: {
            all: sample.documents,
            documentOrder: Object.keys(sample.documents)
        }
    }
} as ParserDefault;
