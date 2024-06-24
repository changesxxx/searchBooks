import React, { memo } from 'react'

import FocusWrapper from './style.js'

import home4 from '@/assets/img/home-4.svg'

const Focus = memo(() => {
  return (
    <FocusWrapper>
      <div className="content_mid">
        <div className="title">ALL THE BOOKS YOU LOOK FOR IN ONE PLACE</div>

        <div style={{ marginTop: '16px' }}>
          <img src={home4} alt="" />
        </div>
      </div>
    </FocusWrapper>
  )
})

export default Focus
