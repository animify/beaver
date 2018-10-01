import React from 'react';
import * as PIXI from "pixi.js";
import { render } from '@inlet/react-pixi';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Point } from 'pixi.js';

const e = new PIXI.interaction.InteractionData();
const app = new PIXI.Application(window.innerWidth, window.innerHeight, {
    antialias: true,
    backgroundColor: 0x000,
    view: document.getElementById('app') as HTMLCanvasElement
});

document.addEventListener('mousewheel', (e: MouseWheelEvent) => {
    if (e.ctrlKey) {
        e.preventDefault();
        zoom(e.clientX, e.clientY, e.deltaY);
    } else {
        pan(e.deltaX, e.deltaY)
    }
});

const getGraphCoords = (function () {
    const ctx = {
        global: { x: 0, y: 0 } as Point
    };

    return (x: number, y: number, graphics: PIXI.DisplayObject) => {
        ctx.global.x = x;
        ctx.global.y = y;
        return e.getLocalPosition(graphics, { x, y } as Point, ctx.global);
    }
}());

function pan(x: number, y: number) {
    const graphics = app.stage.getChildAt(0);
    graphics.position.x -= x;
    graphics.position.y -= y;
}

function zoom(x: number, y: number, delta: number) {
    const graphics = app.stage.getChildAt(0);
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


render(<App />, app.stage)

// registerServiceWorker();
