import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Stage, Container } from '@inlet/react-pixi';
import View from './containers/View'
import store from './store';
import Storage from './utils/storage';
import Panels from './containers/Panels';

const App = () => {
    return (
        <Provider store={store}>
            <Fragment>
                <Panels />
                <Stage width={window.innerWidth} height={window.innerHeight} options={{ backgroundColor: 0x000 }}>
                    <Container ref={(con) => (Storage.CONTAINER = con as PIXI.DisplayObject & Container)}>
                        <View />
                    </Container>
                </Stage>
            </Fragment>
        </Provider >
    )
}

export default App;


