import * as React from 'react';
import { connect } from 'react-redux';
import { List, ListRowProps } from 'react-virtualized';
import { getModelOrder } from '../selectors';
import { IHistoryStoreState } from '../types/module';
import Layer from './Layer';

interface IViewProps {
    modelOrder: string[];
}

class Layers extends React.PureComponent<IViewProps> {
    public getItemSize = () => {
        return 38;
    };

    public Row = ({ key, style, index }: ListRowProps) => {
        const pid = this.props.modelOrder[index];
        return <Layer key={key} style={style} pid={pid} />;
    };

    public render() {
        const { modelOrder } = this.props;
        return (
            <div className="layers">
                <List
                    height={window.innerHeight}
                    rowCount={modelOrder.length}
                    rowHeight={this.getItemSize}
                    rowRenderer={this.Row}
                    width={200}
                />
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
