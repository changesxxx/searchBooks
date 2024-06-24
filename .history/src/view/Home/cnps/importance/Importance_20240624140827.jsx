import React, { memo } from 'react'

import ImportanceWrapper from './style'

const Importance = memo(() => {
  return (
    <ImportanceWrapper className="content_mid">
      <div className="title">The Importance of reading books</div>

      <div className="item">
        <div className="text">1</div>
        <div className="img">2</div>
      </div>
    </ImportanceWrapper>
  )
})

export default Importance
