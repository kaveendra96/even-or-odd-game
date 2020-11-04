import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGame } from './actions/settings';

import './App.css';


class App extends Component{
  render(){
    console.log('this :',this)
    return(
      <div className="App">
          { this.props.gameStarted ? <h1>hi</h1> : <h1>bye</h1> }
          <button onClick={()=>this.props.dispatch(startGame())} >click</button>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  console.log('state',state)
  return { gameStarted:state.gameStarted}
}


const componentConnector = connect(mapStateToProps)

export default componentConnector(App);
