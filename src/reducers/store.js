/*store.subscribe(() => {
    console.log("State changed: ", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Foo"});
store.dispatch({type: "CHANGE_AGE", payload: 2});*/

import { applyMiddleware, createStore } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import appReducers from './reducers'

const middleware = applyMiddleware(promise(), thunk, createLogger())

const store = createStore(appReducers)

export default store;