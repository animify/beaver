import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getDocumentOrder } from '../selectors';
import parser from '../parser';
import { Dispatch, bindActionCreators } from 'redux';
import { setEntities } from '../store/actions/view';
import store from '../store';

type PanelsProps = {
    documentOrder?: string[],
    changeBoard?: (id: string, entities: any) => void;
}

const mapStateToProps = (state: StoreState) => ({
    documentOrder: getDocumentOrder(state),
    changeBoard: () => null as any
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    changeBoard: setEntities
}, dispatch);

class Panels extends PureComponent<PanelsProps> {
    private goToBoard(pid: string) {
        const { models: currentModels } = (store.getState().view as StoreState['view']).present;
        parser.sample.documents[parser.sample.visibleDocument].models = currentModels;
        parser.sample.visibleDocument = pid;

        this.props.changeBoard(pid, parser.sample.documents[pid].models);
    }

    public render() {
        const { documentOrder } = this.props;
        return (
            <div className="top panel">
                {documentOrder.map((pid: string) => (
                    <a key={pid} role="presentation" onClick={this.goToBoard.bind(this, pid)}>{pid}</a>
                ))}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panels);

