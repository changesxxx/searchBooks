import React, { memo } from 'react'
import Synopsis from './cnps/synopsis/Synopsis'
import Importance from './cnps/importance/Importance'
import Focus from './cnps/focus/Focus'

const Home = memo(() => {
  return (
    <div>
      <Synopsis></Synopsis>
      <Importance></Importance>
      <Focus></Focus>
    </div>
  )
})

export default Home
