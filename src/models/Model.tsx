import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as PIXI from "pixi.js";
import { Sprite } from '@inlet/react-pixi';
import { getModel } from '../selectors';
import { clientCoords } from '../utils/utils';
import Storage from '../utils/storage';
import produce from 'immer';

type IModelProps = {
    pid: string;
}

type ModelProps = {
    model?: Model,
}

type ModelState = {
    dragging: boolean;
    model: Model;
    draggingInitialCoords: PIXI.Point;
}

const makeMapStateToProps = (initialState: StoreState, initialProps: IModelProps) => {
    return (state: StoreState) => ({
        model: getModel(state, initialProps),
    });
}

class BaseModel extends PureComponent<ModelProps, ModelState> {
    state = {
        dragging: false,
        draggingInitialCoords: { x: 0, y: 0 },
        model: { ...this.props.model },
    } as ModelState;

    onDragStart = (e: PIXI.interaction.InteractionEvent) => {
        console.log('starting drag');
        console.log('e', e);
        this.setState(() => ({
            dragging: true,
            draggingInitialCoords: e.data.getLocalPosition(Storage.CONTAINER)
        }));
    }

    onDragMove = (e: PIXI.interaction.InteractionEvent) => {
        const { dragging, draggingInitialCoords } = this.state;

        if (dragging) {
            const client = clientCoords(e.data.global.x, e.data.global.y)
            const newPosition = e.data.getLocalPosition(Storage.CONTAINER);

            this.setState(produce((draft: any) => {
                draft.model.position.x += (newPosition.x - draggingInitialCoords.x);
                draft.model.position.y += (newPosition.y - draggingInitialCoords.y);
                draft.draggingInitialCoords = newPosition;
            }))
        }
    }

    onDragEnd = () => {
        console.log('end drag');
        this.setState(() => ({ dragging: false }));
    }

    render() {
        const { model } = this.state;

        if (model.type === 'screen') {
            return (
                <Sprite
                    key={model.pid}
                    interactive={true}
                    pointerdown={this.onDragStart}
                    mousemove={this.onDragMove}
                    mouseup={this.onDragEnd}
                    mouseupoutside={this.onDragEnd}
                    texture={PIXI.Texture.fromImage(require('./test-images/' + (model as Screen).image))}
                    x={model.position.x}
                    y={model.position.y}
                />
            );
        }

        return null
    }
}

export default connect(
    makeMapStateToProps
)(BaseModel);
