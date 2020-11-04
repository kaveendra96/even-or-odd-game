import { SET_GAME_STARTED, SET_INSTRAUCTIONS_EXPANDED } from '../actions/types'

const DEFAULT_SETTINGS={
    gameStarted:false,
    instructionsExpanded:false
  }

const settingsReducer= (state=DEFAULT_SETTINGS,action) => {
    // console.log('state',state,'action',action)
  
    switch(action.type){
      case SET_GAME_STARTED:
        return{ ...state, gameStarted:action.gameStarted }

      case SET_INSTRAUCTIONS_EXPANDED:
        return{ ...state,instructionsExpanded:action.instructionsExpanded }
      default:
        return state;
    }
    
  }
  export default settingsReducer