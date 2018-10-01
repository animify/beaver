import sample from './sample.json';

interface ParserDefault {
    initialState: StoreState;
}

export default {
    initialState: {
        view: {
            document: sample.visibleDocument,
            modelOrder: Object.keys(sample.documents[sample.visibleDocument].entities),
            models: sample.documents[sample.visibleDocument].entities,
            selected: [],
            hovering: null,
        },
        documents: {
            all: sample.documents,
            documentOrder: Object.keys(sample.documents)
        }
    }
} as ParserDefault;
