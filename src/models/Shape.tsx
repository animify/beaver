import * as React from 'react';
import { ShapeType } from 'src/types/enums';
import Ellipse from '../../src/components/Ellipse';
import Rectangle from '../../src/components/Rectangle';

export interface IOwnProps {
    data: Shape;
}

const getDefaultShape = (data: Shape) => {
    switch (data.shape) {
        case ShapeType.Rect:
            return <Rectangle fillColor={0x32f8c9} width={data.size.w} height={data.size.h} />;
        case ShapeType.Ellipse:
            return <Ellipse fillColor={0x32f8c9} width={data.size.w} height={data.size.h} />;
        default:
            return <Rectangle fillColor={0x32f8c9} width={data.size.w} height={data.size.h} />;
    }
};

class ShapeModel extends React.PureComponent<IOwnProps> {
    public render() {
        const { data } = this.props;
        return <React.Fragment>{getDefaultShape(data)}</React.Fragment>;
    }
}

export default ShapeModel;
