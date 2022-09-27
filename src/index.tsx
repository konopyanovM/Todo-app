import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { loadLocaleStorage } from './utils/loadLocaleStorage'
import { ITEM_LIST } from './constants'
import { Provider } from 'react-redux'
import { store } from './store'

loadLocaleStorage(ITEM_LIST, [])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const application = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

root.render(application)
