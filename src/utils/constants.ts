import * as cuid from 'cuid';

export const INTERACTION_DATA = new PIXI.interaction.InteractionData();
export const BASE_MODEL = () =>
    ({
        name: 'Untitled',
        pid: cuid(),
        position: {
            x: 0,
            y: 0,
        },
        size: {
            h: 200,
            w: 200,
        },
        type: 'shape',
    } as Model);
