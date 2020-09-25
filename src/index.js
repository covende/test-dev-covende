import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {configureStore} from './redux/store';

var mountNode = document.getElementById('app');
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  mountNode,
);
