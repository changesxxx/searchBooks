import React, { memo } from 'react'
import PageHeader from './components/pageHeader/PageHeader'
import PageFooter from './components/pageFooter/PageFooter'
import Home from './view/Home/Home'

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
