import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Reducer from './reducers/index';

const store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();