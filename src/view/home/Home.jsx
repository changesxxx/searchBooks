import React, { memo } from 'react'
import Synopsis from './cnps/synopsis/Synopsis'
import Importance from './cnps/importance/Importance'
import Focus from './cnps/focus/Focus'
import Technologies from './cnps/technologies/Technologies'

const Home = memo(() => {
  return (
    <div >
      <Synopsis></Synopsis>
      <Importance></Importance>
      <Focus></Focus>
      <Technologies></Technologies>
    </div>
  )
})

export default Home
