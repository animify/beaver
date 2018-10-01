import React from 'react';
import * as PIXI from "pixi.js";
import { render } from '@inlet/react-pixi';
import App from './App';
import './index.css';
import './events/document'
// import registerServiceWorker from './registerServiceWorker';

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {
    antialias: true,
    backgroundColor: 0x000,
    view: document.getElementById('app') as HTMLCanvasElement
});


render(<App />, app.stage)

export default app;

// registerServiceWorker();
