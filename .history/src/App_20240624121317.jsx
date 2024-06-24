import React, { memo } from 'react'
import PageHeader from './components/pageHeader/PageHeader'
import PageFooter from './components/pageFooter/PageFooter'

import PageFooter from './view/home/Home'

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
