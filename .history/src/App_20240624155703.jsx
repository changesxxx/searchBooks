import React, { memo } from 'react'

import { useRoutes, useLocation } from 'react-router-dom'
import routes from '@/router'

import PageHeader from './components/pageHeader/PageHeader'
import PageFooter from './components/pageFooter/PageFooter'

const App = memo(() => {
  return (
    <div>
      <PageHeader></PageHeader>
      {useRoutes(routes)}
      <PageFooter></PageFooter>
    </div>
  )
})

export default App
