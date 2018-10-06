import { PixiComponent } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';

export interface IOwnProps {
    fillColor?: number;
    fillColorAlpha?: number;
    strokeWidth?: number;
    strokeColor?: number;
    strokeColorAlpha?: number;
    x?: number;
    y?: number;
    width: number;
    height: number;
}

export default PixiComponent('Ellipse', {
    applyProps: (instance: PIXI.Graphics, oldProps, newProps: IOwnProps) => {
        const { fillColor, fillColorAlpha, strokeWidth, strokeColor, strokeColorAlpha, x, y, width, height } = newProps;
        instance.clear();

        if (strokeColor) {
            instance.lineStyle(strokeWidth || 2, strokeColor, strokeColorAlpha || 1, 1);
        }

        if (fillColor) {
            instance.beginFill(fillColor);
            instance.fillAlpha = fillColorAlpha || 1;
        }

        instance.drawEllipse(x || width / 2, y || height / 2, width / 2, height / 2);
        instance.endFill();
    },
    create: _ => {
        return new PIXI.Graphics();
    },
    didMount: (instance, parent) => {
        // apply custom logic on mount
    },
    willUnmount: (instance, parent) => {
        // clean up before removal
    },
});
