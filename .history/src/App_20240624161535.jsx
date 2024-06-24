import React, { memo, useEffect } from 'react'

import { useRoutes, useLocation, useState } from 'react-router-dom'
import routes from '@/router'

import PageHeader from './components/pageHeader/PageHeader'
import PageFooter from './components/pageFooter/PageFooter'

const App = memo(() => {
  const flag = useState(true)

  const location = useLocation()

  useEffect(() => {
    const is = routes.some((route) => location.pathname === route.path)
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
