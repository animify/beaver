import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@inlet/react-pixi';
import View from './containers/View'
import store from './store';
import Storage from './utils/storage';

const App = () => {
    return (
        <Provider store={store}>
            <Container ref={(con) => (Storage.CONTAINER = con as PIXI.DisplayObject & Container)}>
                <View />
            </Container>
        </Provider >
    )
}

export default App;


