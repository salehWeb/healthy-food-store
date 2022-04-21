import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import firstReducer from './Cart'

const reducers = combineReducers({
    firstReducer: firstReducer
})

export default reducers