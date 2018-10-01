import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@inlet/react-pixi';
import View from './containers/View'
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Container>
                <View />
            </Container>
        </Provider >
    )
}

export default App;


