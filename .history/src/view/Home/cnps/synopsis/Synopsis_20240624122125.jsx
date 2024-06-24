import React, { memo } from 'react'

import SynopsisWrapper from './style'

const Synopsis = memo(() => {
  return (
    <SynopsisWrapper className="content_mid">
      <div className="content item">1</div>
      <div className="img item">
        <img src="@/assets/img/" alt="" />
      </div>
    </SynopsisWrapper>
  )
})

export default Synopsis
