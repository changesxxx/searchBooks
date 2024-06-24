import React, { memo } from 'react'

import TechnologiesWrapper from './style'

import home5 from '@/assets/img/home-5.svg'
import home6 from '@/assets/img/home-5.svg'

const Technologies = memo(() => {
  return (
    <TechnologiesWrapper>
      <div className="content_mid container">
        <div className="item">
          <div>
            <img src={home5} alt="" />
          </div>
        </div>
        <div className="item">2</div>
      </div>
    </TechnologiesWrapper>
  )
})

export default Technologies
