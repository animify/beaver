import React from 'react';
import { connect } from 'react-redux';
import * as PIXI from "pixi.js";
import { Sprite } from '@inlet/react-pixi';
import { getModel } from '../selectors';

type ModelProps = {
    model?: {
        pid: string;
        type: string;
        image: string;
        position: any;
    },
}

const makeMapStateToProps = (initialState: StoreState, initialProps: Model) => {
    return (state: StoreState) => ({
        model: getModel(state, initialProps),
    });
}

const Model: React.StatelessComponent<ModelProps> = ({ model }) => {
    if (model.type === 'screen') {
        return (<Sprite key={model.pid} texture={PIXI.Texture.fromImage(require('./test-images/' + model.image))} x={model.position.x} y={model.position.y} />);
    }

    return null;
}

export default connect(
    makeMapStateToProps
)(Model);
