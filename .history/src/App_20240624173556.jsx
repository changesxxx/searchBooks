import React, { memo, useEffect, useState, Suspense } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
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
    <Suspense>
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        {flag && <PageHeader></PageHeader>}
        {useRoutes(routes)}
        {flag && <PageFooter></PageFooter>}
      </div>
    </Suspense>
  )
})

export default App