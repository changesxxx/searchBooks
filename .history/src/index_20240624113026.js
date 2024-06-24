import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'))

//css重置
import 'normalize.css'
import '@/assets/css/index.css'

root.render(<App />)
