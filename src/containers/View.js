import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Model from '../models/Model';
import { getModelOrder } from '../selectors';

const mapStateToProps = state => ({
    modelOrder: getModelOrder(state)
});

class View extends PureComponent {
    render() {
        const { modelOrder } = this.props;
        return (
            <Fragment>
                {modelOrder.map(modelId => (
                    <Model key={`model-${modelId}`} modelId={modelId} />
                ))}
            </Fragment >
        );
    }
}

View.propTypes = {
    modelOrder: PropTypes.array.isRequired,
};

export default connect(
    mapStateToProps,
)(View);

