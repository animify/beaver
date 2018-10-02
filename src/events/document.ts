import { ActionCreators } from 'redux-undo';
import { zoom, pan } from '../utils/utils';
import store from '../store';
import { duplicateSelected } from '../store/actions/view';

document.addEventListener('mousewheel', (e: MouseWheelEvent) => {
    if (e.altKey) {
        zoom(e.clientX, e.clientY, e.deltaY);
    } else {
        pan(e.deltaX, e.deltaY);
    }
}, { passive: true });

document.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'd') {
        store.dispatch(duplicateSelected());
    }

    if (e.keyCode === 26) {
        if (e.ctrlKey && !e.shiftKey) {
            store.dispatch(ActionCreators.undo());
        }

        if (e.ctrlKey && e.shiftKey) {
            store.dispatch(ActionCreators.redo());
        }
    }
});