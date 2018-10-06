import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import parser from '../parser';
import { getDocumentOrder } from '../selectors';
import store from '../store';
import { setEntities } from '../store/actions/view';
import { IHistoryStoreState } from '../types/module';

interface IStateProps {
    documentOrder: string[];
    changeBoard: (id: string, entities: any) => void;
}

interface IDispatchProps {
    changeBoard: (id: string, models: Model) => void;
}

type Props = IStateProps & IDispatchProps;

class Panels extends React.PureComponent<Props> {
    public render() {
        const { documentOrder } = this.props;
        return (
            <div className="top panel">
                {documentOrder.map((pid: string) => (
                    <a key={pid} role="presentation" onClick={this.goToBoard.bind(this, pid)}>
                        {pid}
                    </a>
                ))}
            </div>
        );
    }

    private goToBoard(pid: string) {
        const { models: currentModels } = (store.getState() as IHistoryStoreState).view.present;
        parser.sample.documents[parser.sample.visibleDocument].models = currentModels;
        parser.sample.visibleDocument = pid;

        this.props.changeBoard(pid, parser.sample.documents[pid].models);
    }
}

const mapStateToProps = (state: StoreState) =>
    ({
        changeBoard: () => null,
        documentOrder: getDocumentOrder(state),
    } as IStateProps);

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            changeBoard: setEntities,
        },
        dispatch
    ) as IDispatchProps;

export default connect<IStateProps, IDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(Panels);
