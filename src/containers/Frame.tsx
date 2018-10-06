import * as React from 'react';
import Rectangle from '../components/Rectangle';

export interface IOwnProps {
    model: Model;
}

class Frame extends React.PureComponent<IOwnProps> {
    public render() {
        const { model } = this.props;

        return (
            <Rectangle
                strokeWidth={2}
                strokeColor={0x4756ff}
                x={model.position.x}
                y={model.position.y}
                width={model.size.w}
                height={model.size.h}
            />
        );
    }
}

export default Frame;
