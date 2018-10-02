import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as PIXI from "pixi.js";
import { Sprite } from '@inlet/react-pixi';
import { getModel } from '../selectors';
import { Dispatch, bindActionCreators } from 'redux';
import Storage from '../utils/storage';
import produce from 'immer';
import { updateModel } from '../store/actions/view';
import { HistoryStoreState } from '../types/module';

type IModelProps = {
    pid: string;
}

type ModelProps = {
    model?: Model,
    updateModel?: (pid: Model['pid'], props: Partial<Model>) => void
}

type ModelState = {
    dragging: boolean;
    model: Model;
    draggingInitialCoords: PIXI.Point;
}

const makeMapStateToProps = (initialState: HistoryStoreState, initialProps: IModelProps) => {
    return (state: HistoryStoreState) => ({
        model: getModel(state, initialProps),
    });
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    updateModel
}, dispatch);

class BaseModel extends PureComponent<ModelProps, ModelState> {
    state = {
        dragging: false,
        draggingInitialCoords: { x: 0, y: 0 },
        model: { ...this.props.model },
    } as ModelState;

    componentWillReceiveProps(props: any) {
        console.log('new props', props);
    }

    onDragStart = (e: PIXI.interaction.InteractionEvent) => {
        this.setState(() => ({
            dragging: true,
            draggingInitialCoords: e.data.getLocalPosition(Storage.CONTAINER)
        }));
    }

    onDragMove = (e: PIXI.interaction.InteractionEvent) => {

        if (this.state.dragging) {
            const { draggingInitialCoords } = this.state;
            const newPosition = e.data.getLocalPosition(Storage.CONTAINER);

            this.setState(produce((draft: any) => {
                draft.model.position.x += (newPosition.x - draggingInitialCoords.x);
                draft.model.position.y += (newPosition.y - draggingInitialCoords.y);
                draft.draggingInitialCoords = newPosition;
            }))
        }
    }

    onDragEnd = () => {
        this.setState(() => ({ dragging: false }));

        this.props.updateModel(this.state.model.pid, { position: { ...this.state.model.position } })
    }

    render() {
        const { dragging, model } = this.state;
        const position = dragging ? model.position : this.props.model.position;

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
                    x={position.x}
                    y={position.y}
                />
            );
        }

        return null
    }
}

export default connect(
    makeMapStateToProps,
    mapDispatchToProps
)(BaseModel);
