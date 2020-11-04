import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGame,cancelGame } from './actions/settings';
import { fetchNewDeck } from './actions/deck'
import fetchStates from './reducers/fetchState'

import './App.css';
import Instructions from './component/Instructions';


class App extends Component{



//after introduce mapDispatchtoprops this methods useless
  // startGame = () => {
  //   this.props.dispatch(startGame())
  // }
  // cancelGame=() =>{
  //   this.props.dispatch(cancelGame())
  // }


  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck()    
  }



  render(){

    if(this.props.fetchState === fetchStates.error){
      return(
        <div>
          <p>Please try reloading the app. An error occurred</p>
        </div>
      )
    }

    return(
      <div className="App">
          <div className="mt-4">
            <h2 className="text">♠️♣️ Evens or Odds ♣️♠️</h2>
            {this.props.gameStarted ?(
                <div>
                  <h4 className="text">The game is on</h4>
                  <br/>
                  <button onClick={this.props.cancelGame}>Cancel Game</button>
                </div>

              ):(
                <div>
                    <h3>A new Game Await</h3>
                    <br/>
                    <button onClick={this.startGame}>Start Game</button>
                    {/* <button onClick={this.startGame}>Start Game</button> */}
                  </div>

            )}
            <Instructions/>
          </div>
      </div>
    )
  }
}
//this method use to connect store with the component
const mapStateToProps = state =>{
  // console.log('state',state)
  const {
    settings: { gameStarted },
    deck: { fetchState,message }
  } = state


  return { gameStarted ,fetchState, message }
}
//alternative way to props -> dispatch -> startGame ===> props -> startGame() 
// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame:() =>dispatch(cancelGame()),
//     fetchNewDeck:() => dispatch(fetchNewDeck())
//   }
// }


const componentConnector = connect(
  mapStateToProps,
  {startGame,cancelGame,fetchNewDeck})

export default componentConnector(App);
