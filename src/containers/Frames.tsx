import * as React from 'react';
import { connect } from 'react-redux';
import { getSelectedModels } from '../selectors';
import { IHistoryStoreState } from '../types/module';
import Frame from './Frame';

interface IFramesProps {
    selectedModels: Model[];
}

class Frames extends React.PureComponent<IFramesProps> {
    public render() {
        const { selectedModels } = this.props;
        return (
            <React.Fragment>
                {selectedModels.map(model => (
                    <Frame key={`frame-${model.pid}`} model={model} />
                ))}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: IHistoryStoreState) => ({
    selectedModels: getSelectedModels(state),
});

export default connect<IFramesProps, null, null>(
    mapStateToProps,
    null
)(Frames);
