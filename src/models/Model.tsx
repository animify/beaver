import { Container } from '@inlet/react-pixi';
import produce from 'immer';
import * as PIXI from 'pixi.js';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ModelType } from '../../src/types/enums';
import { getModel } from '../selectors';
import { toggleSelectModel, updateModel } from '../store/actions/view';
import { IHistoryStoreState } from '../types/module';
import Storage from '../utils/storage';
import FrameModel from './Frame';
import ShapeModel from './Shape';

export interface IOwnProps {
    pid: string;
}

interface IStateProps {
    model: Model;
}

interface IDispatchProps {
    updateModel: (pid: Model['pid'], props: Partial<Model>) => void;
    toggleSelectModel: (pid: Model['pid'], deselectAll?: boolean) => void;
}

interface IState {
    dragging: boolean;
    model: Model;
    draggingInitialCoords: PIXI.Point;
}

type Props = IStateProps & IDispatchProps & IOwnProps;

class BaseModel extends React.PureComponent<Props, IState> {
    public state = {
        dragging: false,
        draggingInitialCoords: { x: 0, y: 0 },
        model: { ...this.props.model },
    } as IState;

    public onDragStart = (e: PIXI.interaction.InteractionEvent) => {
        this.setState(() => ({
            dragging: true,
            draggingInitialCoords: e.data.getLocalPosition(Storage.CONTAINER),
        }));

        this.props.toggleSelectModel(this.props.model.pid, true);
    };

    public onDragMove = (e: PIXI.interaction.InteractionEvent) => {
        if (this.state.dragging) {
            const { draggingInitialCoords } = this.state;
            const newPosition = e.data.getLocalPosition(Storage.CONTAINER);

            this.setState(
                produce((draft: IState) => {
                    draft.model.position.x = +(draft.model.position.x + newPosition.x - draggingInitialCoords.x).toFixed(2);
                    draft.model.position.y = +(draft.model.position.y + newPosition.y - draggingInitialCoords.y).toFixed(2);
                    draft.draggingInitialCoords = newPosition;
                })
            );
        }
    };

    public onDragEnd = () => {
        this.setState(() => ({ dragging: false }));

        if (this.props.model.position.x === this.state.model.position.x && this.props.model.position.y === this.state.model.position.y) {
            return;
        }

        this.props.updateModel(this.state.model.pid, {
            position: { ...this.state.model.position },
        });
    };

    public getComponentFromType(model: Model | Shape) {
        switch (model.type) {
            case ModelType.Frame:
                return <FrameModel data={model as Frame} />;
            case ModelType.Shape:
                return <ShapeModel data={model as Shape} />;
            default:
                return <FrameModel data={model as Frame} />;
        }
    }

    public render() {
        const { dragging, model } = this.state;
        const position = dragging ? model.position : this.props.model.position;

        return (
            <Container
                key={model.pid}
                interactive={true}
                pointerdown={this.onDragStart}
                mousemove={this.onDragMove}
                mouseup={this.onDragEnd}
                mouseupoutside={this.onDragEnd}
                x={position.x}
                y={position.y}
            >
                {this.getComponentFromType(model)}
            </Container>
        );
    }
}

const makeMapStateToProps = (initialState: IHistoryStoreState, initialProps: IOwnProps) => {
    return (state: IHistoryStoreState) => ({
        model: getModel(state, initialProps),
    });
};

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            toggleSelectModel,
            updateModel,
        },
        dispatch
    );

export default connect<IStateProps, IDispatchProps, IOwnProps>(
    makeMapStateToProps,
    mapDispatchToProps
)(BaseModel);
