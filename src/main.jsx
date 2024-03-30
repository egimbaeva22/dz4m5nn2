import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducer'
import { createStore, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
