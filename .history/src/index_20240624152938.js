import React from 'react'

import ReactDOM from 'react-dom/client'

//router
import { BrowserRouter } from 'react-router-dom'

//css重置
import 'normalize.css'
import '@/assets/css/index.css'

import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BrowserRouter></BrowserRouter><App />)
