import { Container, Stage } from '@inlet/react-pixi';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Panels, View } from './containers';
import Frames from './containers/Frames';
import store from './store';
import Storage from './utils/storage';

const App = () => {
    return (
        <Provider store={store}>
            <React.Fragment>
                <Panels />
                <Stage
                    id="canvas"
                    width={window.innerWidth}
                    height={window.innerHeight}
                    options={{ backgroundColor: 0x000, antialias: true }}
                >
                    <Container ref={con => (Storage.CONTAINER = con as PIXI.DisplayObject & Container)}>
                        <View />
                        <Frames />
                    </Container>
                </Stage>
            </React.Fragment>
        </Provider>
    );
};

export default App;
