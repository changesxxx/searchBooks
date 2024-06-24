import React, { memo } from 'react'

import { useRoutes } from 'react-router-dom'

import PageHeader from './components/pageHeader/PageHeader'
import PageFooter from './components/pageFooter/PageFooter'

import Home from './view/home/Home'

const App = memo(() => {
  return (
    <div>
      <PageHeader></PageHeader>
      <Home></Home>
      <PageFooter></PageFooter>
    </div>
  )
})

export default App
