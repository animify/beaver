import { ModelType } from 'src/types/enums';
import { createAction } from 'typesafe-actions';

export const newShape = createAction('status/NEW_SHAPE', resolve => {
    return (type: ModelType, position: Point, size: Size) => resolve({ type, position, size });
});
