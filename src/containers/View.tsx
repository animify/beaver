import * as React from 'react';
import { connect } from 'react-redux';
import Model from '../models/Model';
import { getModelOrder } from '../selectors';
import { IHistoryStoreState } from '../types/module';

interface IViewProps {
    modelOrder: string[];
}

const mapStateToProps = (state: IHistoryStoreState) => ({
    modelOrder: getModelOrder(state),
});

class View extends React.PureComponent<IViewProps> {
    public render() {
        const { modelOrder } = this.props;
        return (
            <React.Fragment>
                {modelOrder.map((pid: string) => (
                    <Model key={`model-${pid}`} pid={pid} />
                ))}
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(View);
