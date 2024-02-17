import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { accountReducer } from './reducers/account.js'
import { bonusReducer } from './reducers/bonus.js'
import logger from "redux-logger";
import {createStore , combineReducers , applyMiddleware} from 'redux'
import { thunk } from "redux-thunk";
import { Provider } from 'react-redux'

const store = createStore(combineReducers({
  accountReducer,
  bonusReducer
}), applyMiddleware(logger, thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  
    <App/>
    </Provider>
  
  </React.StrictMode>,
)
//Note: store in provide in a keyword

//react-redux allows redux state to act as react state , so whenever it changes , components re-render and site change.
//without react-redux redux variable will change, but react will not treat it as it's own state and nothing will re-render and hence dom will not be updated

//react-redux gives us acces to two hooks {useSelector} and {useDispatch}

//{useSelector} gives us access to the global state variable which is now treated as a react stat. We can filer our required state from global state varibal by the use of dot operator.

//{useDispatch} gives us access to dispatch , from which we can dispatch any action we want

//these hookes take out value from the provider