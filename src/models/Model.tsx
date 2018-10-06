import { Sprite } from '@inlet/react-pixi';
import produce from 'immer';
import * as PIXI from 'pixi.js';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getModel } from '../selectors';
import { updateModel } from '../store/actions/view';
import { IHistoryStoreState } from '../types/module';
import Storage from '../utils/storage';

export interface IOwnProps {
    pid: string;
}

interface IStateProps {
    model: Model;
}

interface IDispatchProps {
    updateModel: (pid: Model['pid'], props: Partial<Model>) => void;
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

    public componentWillReceiveProps(props: any) {
        console.log('new props', props);
    }

    public onDragStart = (e: PIXI.interaction.InteractionEvent) => {
        this.setState(() => ({
            dragging: true,
            draggingInitialCoords: e.data.getLocalPosition(Storage.CONTAINER),
        }));
    };

    public onDragMove = (e: PIXI.interaction.InteractionEvent) => {
        if (this.state.dragging) {
            const { draggingInitialCoords } = this.state;
            const newPosition = e.data.getLocalPosition(Storage.CONTAINER);

            this.setState(
                produce((draft: any) => {
                    draft.model.position.x += newPosition.x - draggingInitialCoords.x;
                    draft.model.position.y += newPosition.y - draggingInitialCoords.y;
                    draft.draggingInitialCoords = newPosition;
                })
            );
        }
    };

    public onDragEnd = () => {
        this.setState(() => ({ dragging: false }));

        this.props.updateModel(this.state.model.pid, {
            position: { ...this.state.model.position },
        });
    };

    public render() {
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

        return null;
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
            updateModel,
        },
        dispatch
    );

export default connect<IStateProps, IDispatchProps, IOwnProps>(
    makeMapStateToProps,
    mapDispatchToProps
)(BaseModel);
