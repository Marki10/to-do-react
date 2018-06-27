import { combineReducers } from "redux"

import listReducer from './reducerList'

const appReducers = combineReducers({
    list: listReducer
})

export default appReducers