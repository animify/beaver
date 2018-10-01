import Storage from '../utils/storage';
import { Point } from "pixi.js";
import { INTERACTION_DATA } from '../utils/constants';

const getGraphCoords = (function () {
    const ctx = {
        global: { x: 0, y: 0 } as Point
    };

    return (x: number, y: number, graphics: PIXI.DisplayObject) => {
        ctx.global.x = x;
        ctx.global.y = y;
        return INTERACTION_DATA.getLocalPosition(graphics, { x, y } as Point, ctx.global);
    }
}());

export function pan(x: number, y: number) {
    const graphics = Storage.CONTAINER as PIXI.DisplayObject;
    graphics.position.x -= x;
    graphics.position.y -= y;
}

export function zoom(x: number, y: number, delta: number) {
    const graphics = Storage.CONTAINER as PIXI.DisplayObject;
    const direction = delta < 0 ? 1 : -1;
    const factor = (1 + direction * 0.2);
    graphics.scale.x *= factor;
    graphics.scale.y *= factor;

    const beforeTransform = getGraphCoords(x, y, graphics);
    graphics.updateTransform();
    const afterTransform = getGraphCoords(x, y, graphics);

    graphics.position.x += (afterTransform.x - beforeTransform.x) * graphics.scale.x;
    graphics.position.y += (afterTransform.y - beforeTransform.y) * graphics.scale.y;
    graphics.updateTransform();
}