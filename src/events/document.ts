import { zoom, pan } from '../utils/utils';
import store from '../store';
import { duplicateSelected } from '../store/actions/view';

document.addEventListener('mousewheel', (e: MouseWheelEvent) => {
    if (e.ctrlKey) {
        e.preventDefault();
        zoom(e.clientX, e.clientY, e.deltaY);
    } else {
        pan(e.deltaX, e.deltaY);
    }
});

document.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'd') {
        console.log(e);
        store.dispatch(duplicateSelected());
    }
});