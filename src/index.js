import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import SpinnakerOnTV from './modules';
import registerServiceWorker from './registerServiceWorker';
import createStore from './redux/createStore'

const store = createStore()

const App = (props) => (
    <Provider store={store}>
        <SpinnakerOnTV/>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
