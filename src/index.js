import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';


const store=createStore(
  rootReducer,
  applyMiddleware(thunk),
  );


//can console log the changings state of store 
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
