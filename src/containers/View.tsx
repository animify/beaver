import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Model from '../models/Model';
import { getModelOrder } from '../selectors';

type ViewProps = {
    modelOrder?: string[],
}

const mapStateToProps = (state: StoreState) => ({
    modelOrder: getModelOrder(state)
});

class View extends PureComponent<ViewProps> {
    public render() {
        const { modelOrder } = this.props;
        return (
            <Fragment>
                {modelOrder.map((pid: string) => (
                    <Model key={`model-${pid}`} pid={pid} />
                ))}
            </Fragment >
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(View);

