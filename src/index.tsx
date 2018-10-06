import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './events/document';
import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

serviceWorker.unregister();
