import React, { memo } from 'react'

import SynopsisWrapper from './style'

const Synopsis = memo(() => {
  return (
    <SynopsisWrapper className="content_mid">
      <div className="content">1</div>
      <div className="img">2</div>
    </SynopsisWrapper>
  )
})

export default Synopsis
