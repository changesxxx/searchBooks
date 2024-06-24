import React, { memo } from 'react'

import SynopsisWrapper from './style'

const Synopsis = memo(() => {
  return (
    <SynopsisWrapper className="content_mid">
      <div className="content"></div>
    </SynopsisWrapper>
  )
})

export default Synopsis
