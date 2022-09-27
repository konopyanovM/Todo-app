import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { loadLocaleStorage } from './utils/loadLocaleStorage'
import { ITEM_LIST } from './constants'

loadLocaleStorage(ITEM_LIST, [])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const application = (
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)

root.render(application)
