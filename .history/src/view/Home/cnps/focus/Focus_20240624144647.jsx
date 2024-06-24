import React, { memo } from 'react'

import FocusWrapper from './style.js'

const Focus = memo(() => {
  return (
    <FocusWrapper>
      <div className="content_mid">
        <div className="title">ALL THE BOOKS YOU LOOK FOR IN ONE PLACE</div>
      </div>
    </FocusWrapper>
  )
})

export default Focus
