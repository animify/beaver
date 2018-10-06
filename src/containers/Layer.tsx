import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getModel } from '../selectors';
import { updateModel } from '../store/actions/view';
import { IHistoryStoreState } from '../types/module';

export interface IOwnProps {
    pid: string;
}

interface IStateProps {
    model: Model;
}

interface IDispatchProps {
    updateModel: (pid: Model['pid'], props: Partial<Model>) => void;
}

type Props = IStateProps & IDispatchProps & IOwnProps;

class Layer extends React.PureComponent<Props> {
    public render() {
        const { model } = this.props;
        return (
            <div className="layer">
                <p>{model.name}</p>
            </div>
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
            updateModel,
        },
        dispatch
    );

export default connect<IStateProps, IDispatchProps, IOwnProps>(
    makeMapStateToProps,
    mapDispatchToProps
)(Layer);
