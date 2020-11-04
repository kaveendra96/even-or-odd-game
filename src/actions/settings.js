import { SET_GAME_STARTED, SET_INSTRAUCTIONS_EXPANDED } from './types'

export const startGame = () => {
    return { type:SET_GAME_STARTED,gameStarted:true}
  }
export const cancelGame=() =>{
    return { type:SET_GAME_STARTED,gameStarted:false}
  }
export const expandInstructions = () => {
    return {type:SET_INSTRAUCTIONS_EXPANDED,instructionsExpanded:true}
  }
export const collapseInstructions = () => {
    return {type:SET_INSTRAUCTIONS_EXPANDED,instructionsExpanded:false}
  }