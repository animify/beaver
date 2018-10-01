import sample from './sample.json';

export default {
    initialState: {
        // settings: sample.settings,
        doc: {
            page: sample.visiblePage,
            modelOrder: Object.keys(sample.pages[sample.visiblePage].entities),
            models: sample.pages[sample.visiblePage].entities,
            selected: [],
            hovering: null,
        },
        // boards: {
        //     all: sample.pages,
        //     boardsOrder: Object.keys(sample.pages)
        // }
    }
};
