import React, { memo } from 'react'

import FocusWrapper from './style.js'

import second from '@/assets/img/home-4.svg'

const Focus = memo(() => {
  return (
    <FocusWrapper>
      <div className="content_mid">
        <div className="title">ALL THE BOOKS YOU LOOK FOR IN ONE PLACE</div>
      </div>

      <div style={{ marginTop: '16px' }}></div>
    </FocusWrapper>
  )
})

export default Focus
