import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as PIXI from "pixi.js";
import { Sprite } from '@inlet/react-pixi';
import { getModel } from '../selectors';

const makeMapStateToProps = (_, initialProps) => {
    return state => ({
        model: getModel(state, initialProps),
    });
}

const Model = ({ model }) => {
    if (model.model === 'screen') {
        return (<Sprite key={model.id} texture={PIXI.Texture.fromImage(require('./test-images/' + model.image))} x={model.position.x} y={model.position.y}></Sprite>);
    }

    return null
}

Model.propTypes = {
    model: PropTypes.object.isRequired,
};

export default connect(
    makeMapStateToProps
)(Model);
