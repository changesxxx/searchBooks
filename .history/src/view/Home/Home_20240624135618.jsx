import React, { memo } from 'react'
import Synopsis from './cnps/synopsis/Synopsis'
import Importance from './cnps/importance/Importance'

const Home = memo(() => {
  return (
    <div>
      <Synopsis></Synopsis>
      <Importance></Importance>
    </div>
  )
})

export default Home
