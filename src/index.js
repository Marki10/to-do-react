import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import store from './reducers/store'

ReactDOM.render(
<Provider store={store}>
    <App /> 
</Provider>, document.getElementById('root'));
registerServiceWorker();
