import sample from './sample.json';

export default {
    initialState: {
        settings: sample.settings,
        doc: {
            page: sample.currentPage,
            modelOrder: Object.keys(sample.pages[sample.currentPage].entities),
            models: sample.pages[sample.currentPage].entities,
            selected: [],
            hovering: null,
        },
        boards: {
            all: sample.pages,
            boardsOrder: Object.keys(sample.pages)
        }
    }
};
