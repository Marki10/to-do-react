import { combineReducers } from "redux"

import listReducer from './reducerList'
import dbReducer from './reducerDB'

const appReducers = combineReducers({
    list: listReducer,
    db: dbReducer
})

export default appReducers