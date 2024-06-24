import React, { memo } from 'react'

import TechnologiesWrapper from './style'

const Technologies = memo(() => {
  return (
    <TechnologiesWrapper>
      <div className="content_mid container">
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </TechnologiesWrapper>
  )
})

export default Technologies
