import { combineReducers } from 'redux'
import settingsReducer from './settings'
import deckReducer from './settings'

export default combineReducers({
  settings:settingsReducer,
  deck:deckReducer
})
