import React, { memo } from 'react'

import TechnologiesWrapper from './style'

import home5 from '@/assets/img/home-5.svg'
import home6 from '@/assets/img/home-6.svg'
import second from '@/assets/img/'

const Technologies = memo(() => {
  return (
    <TechnologiesWrapper>
      <div className="content_mid container">
        <div className="item">
          <div style={{ marginBottom: '48px' }}>
            <img src={home5} alt="" />
          </div>
          Download samples in PDF or EPUB of your favorite books
        </div>
        <div className="item">
          <div style={{ marginBottom: '48px' }}>
            <img src={home6} alt="" />
          </div>
          Buy the books you're looking for from your phone or PC
        </div>
      </div>

      <div className="content_mid used">
        <div className="title">THE TECHNOLOGIES USED</div>

        <img src= alt="" />
      </div>
    </TechnologiesWrapper>
  )
})

export default Technologies
