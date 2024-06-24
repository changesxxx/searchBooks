import React, { memo, useEffect } from 'react'

import { useRoutes, useLocation } from 'react-router-dom'
import routes from '@/router'

import PageHeader from './components/pageHeader/PageHeader'
import PageFooter from './components/pageFooter/PageFooter'

const App = memo(() => {
  const location = useLocation()

  useEffect(() => {
    const flag = routes.some((route) => location.pathname === route.path)
  }, [location])

  return (
    <div>
      <PageHeader></PageHeader>
      {useRoutes(routes)}
      <PageFooter></PageFooter>
    </div>
  )
})

export default App
