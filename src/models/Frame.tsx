import { Sprite } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import * as React from 'react';

export interface IOwnProps {
    data: Frame;
}

class FrameModel extends React.PureComponent<IOwnProps> {
    public render() {
        const { data } = this.props;

        return <Sprite texture={PIXI.Texture.fromImage(require('./test-images/' + data.image))} />;
    }
}

export default FrameModel;
