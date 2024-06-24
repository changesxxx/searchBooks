import React, { memo } from 'react'

import { Router } from 'react-router-dom'
import route from '@/router'

import PageHeader from './components/pageHeader/PageHeader'
import PageFooter from './components/pageFooter/PageFooter'

import Home from './view/home/Home'

const App = memo(() => {
  return (
    <div>
      <PageHeader></PageHeader>
      <Router router={route}></Router>
      <PageFooter></PageFooter>
    </div>
  )
})

export default App
