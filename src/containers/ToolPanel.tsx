import * as React from 'react';
import { Circle, Octagon, Square } from 'react-feather';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { newModel } from 'src/store/actions/view';
import { ShapeType } from 'src/types/enums';

interface IDispatchProps {
    newModel: (props: Partial<Shape>) => void;
}

type Props = IDispatchProps;

class ToolPanel extends React.PureComponent<Props> {
    public newShape = (type: ShapeType) => {
        this.props.newModel({
            shape: type,
        } as Partial<Shape>);
    };

    public render() {
        return (
            <div className="tools">
                <div className="tool" onClick={this.newRect}>
                    <Square />
                </div>
                <div className="tool" onClick={this.newEllipse}>
                    <Circle />
                </div>
                <div className="tool" onClick={this.newPolygon}>
                    <Octagon />
                </div>
            </div>
        );
    }
    private newRect = () => {
        this.newShape(ShapeType.Rect);
    };

    private newEllipse = () => {
        this.newShape(ShapeType.Ellipse);
    };

    private newPolygon = () => {
        this.newShape(ShapeType.Polygon);
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ newModel }, dispatch) as IDispatchProps;

export default connect<null, IDispatchProps, null>(
    null,
    mapDispatchToProps
)(ToolPanel);
