import { createAction } from 'typesafe-actions';

export const duplicateSelected = createAction('document/DUPLICATE_SELECTED');
export const setEntities = createAction('document/CHANGE_BOARD', resolve => {
    return (pid: string, models: Models) => resolve({ pid, models });
});
export const updateModel = createAction('mode/UPDATE', resolve => {
    return (pid: Model['pid'], props: Partial<Model>) => resolve({ pid, props });
});
