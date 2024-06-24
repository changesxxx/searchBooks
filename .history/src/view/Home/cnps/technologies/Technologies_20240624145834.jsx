import React, { memo } from 'react'

import TechnologiesWrapper from './style'

const Technologies = memo(() => {
  return (
    <TechnologiesWrapper>
      <div className="content_mid container">
        <div className="item">1</div>
        <div className="item">2</div>
      </div>
    </TechnologiesWrapper>
  )
})

export default Technologies
