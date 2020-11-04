import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';

const SET_GAME_STARTED='SET_GAME_STARTED'
const SET_INSTRAUCTIONS_EXPANDED='SET_INSTRAUCTIONS_EXPANDED'

const DEFAULT_SETTINGS={
  gameStarted:false,
  instructionsExpanded:false
}


const rootReducer= (state,action) => {
  console.log('state',state,'action',action)
  
  if(action.type === SET_GAME_STARTED){
    return{
      gameStarted:action.gameStarted,
      instructionsExpanded:false
    }
  }

  return DEFAULT_SETTINGS}

const store=createStore(rootReducer);

const startGame = () => {
  return { type:SET_GAME_STARTED,gameStarted:true}
}
const cancelGame=() =>{
  return { type:SET_GAME_STARTED,gameStarted:false}
}
const expandInstructions = () => {
  return {type:SET_INSTRAUCTIONS_EXPANDED,gameStarted:false}
}
const cancelInstructions = () => {
  return {type:SET_INSTRAUCTIONS_EXPANDED,gameStarted:true}
}


store.dispatch(startGame())
store.dispatch(cancelGame())
store.dispatch(expandInstructions())
store.dispatch(cancelInstructions())



ReactDOM.render(
    <App />,
  document.getElementById('root'));
