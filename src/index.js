import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reducer from './reducer/reducer';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
