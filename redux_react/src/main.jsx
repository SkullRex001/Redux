import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { accountReducer } from './reducers/account.js'
import { bonusReducer } from './reducers/bonus.js'
import logger from "redux-logger";
import {createStore , combineReducers , applyMiddleware} from 'redux'
import { thunk } from "redux-thunk";

const store = createStore(combineReducers({
  accountReducer,
  bonusReducer
}), applyMiddleware(logger, thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
)


//react-redux allows redux state to act as react state , so whenever it changes , components re-render and site change.
//without react-redux redux variable will change, but react will not treat it as it's own state and nothing will re-render and hence dom will not be updated
