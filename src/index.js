import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';


const store=createStore(rootReducer);



store.subscribe(()=>console.log(store.getState()))

// store.dispatch(startGame())
// store.dispatch(expandInstructions())

// store.dispatch(cancelGame())
// store.dispatch(cancelInstructions())



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
