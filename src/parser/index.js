import sample from './sample.json';

export default {
    initialState: {
        // settings: sample.settings,
        view: {
            document: sample.visibleDocument,
            modelOrder: Object.keys(sample.documents[sample.visibleDocument].entities),
            models: sample.documents[sample.visibleDocument].entities,
            selected: [],
            hovering: null,
        },
        documents: {
            all: sample.documents,
            boardsOrder: Object.keys(sample.documents)
        }
    }
};
