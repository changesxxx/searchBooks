import React, { memo } from 'react'

import FocusWrapper from './style.js'

const Focus = memo(() => {
  return (
    <FocusWrapper>
      <div className="content_mid"></div>
    </FocusWrapper>
  )
})

export default Focus
