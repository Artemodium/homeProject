import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from "redux-thunk";
import startAppReducer from './Reducers/startAppReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

let rootReducer = combineReducers({
    startApp: startAppReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.store = store
export default store
