import { BASE_MODEL } from 'src/utils/constants';
import { createAction } from 'typesafe-actions';

export const duplicateSelected = createAction('document/DUPLICATE_SELECTED');

export const setEntities = createAction('document/CHANGE_BOARD', resolve => {
    return (pid: string, models: Models) => resolve({ pid, models });
});

export const newModel = createAction('model/NEW', resolve => {
    return (props: Partial<Model> | Partial<Image> | Partial<Shape> | Partial<Screen>) => resolve({ props: { ...BASE_MODEL(), ...props } });
});

export const updateModel = createAction('model/UPDATE', resolve => {
    return (pid: Model['pid'], props: Partial<Model>) => resolve({ pid, props });
});

export const selectModel = createAction('model/SELECT', resolve => {
    return (pid: Model['pid']) => resolve({ pid });
});

export const toggleSelectModel = createAction('model/TOGGLE_SELECT', resolve => {
    return (pid: Model['pid'], deselectAll: boolean = false) => resolve({ pid, deselectAll });
});
