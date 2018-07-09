import { applyMiddleware, createStore } from 'redux'
import thunk from "redux-thunk"
import appReducers from './reducers'
import axios from 'axios'

const middleware = applyMiddleware(thunk)
const store = createStore(appReducers, middleware)

store.dispatch((dispatch) => {
    axios.get("http://www.json-generator.com/api/json/get/cfoVREHRmG?indent=2")
        .then((response) => {
            dispatch({type: "RECEIVE_TODOS", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_TODOS_ERROR", payload: err})
        })
})

export default store;