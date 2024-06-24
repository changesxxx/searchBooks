import React, { memo, useEffect } from 'react'

import { useRoutes, useLocation, useState } from 'react-router-dom'
import routes from '@/router'

import PageHeader from './components/pageHeader/PageHeader'
import PageFooter from './components/pageFooter/PageFooter'

const App = memo(() => {
  const [flag, setFlag] = useState(true)

  const location = useLocation()

  useEffect(() => {
    const isExistence = routes.some((route) => location.pathname === route.path)
    setFlag(isExistence)
  }, [location])

  return (
    <div>
      {flag ?? <PageHeader></PageHeader>}
      {useRoutes(routes)}
      {flag ?? <PageFooter></PageFooter>}
    </div>
  )
})

export default App
