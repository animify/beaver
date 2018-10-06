import * as React from 'react';
import { connect } from 'react-redux';
import { getModelOrder } from '../selectors';
import { IHistoryStoreState } from '../types/module';
import Layer from './Layer';

interface IViewProps {
    modelOrder: string[];
}

class Layers extends React.PureComponent<IViewProps> {
    public render() {
        const { modelOrder } = this.props;
        return (
            <div className="layers">
                {modelOrder.map((pid: string) => (
                    <Layer key={`layer-${pid}`} pid={pid} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state: IHistoryStoreState) => ({
    modelOrder: getModelOrder(state),
});

export default connect<IViewProps, null, null>(
    mapStateToProps,
    null
)(Layers);
