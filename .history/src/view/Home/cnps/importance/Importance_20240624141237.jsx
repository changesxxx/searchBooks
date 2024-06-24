import React, { memo } from 'react'

import ImportanceWrapper from './style'

import second from '@/assets/img/'

const Importance = memo(() => {
  return (
    <ImportanceWrapper className="content_mid">
      <div className="title">The Importance of reading books</div>

      <div className="item">
        <div className="text">
          <div>READING PRACTICE IMPROVES VOCABULARY</div>
          <div>
            Whether for pleasure, study or information, reading practice
            improves vocabulary and streamlines reasoning and interpretation.
          </div>
        </div>
        <div className="img">2</div>
      </div>
    </ImportanceWrapper>
  )
})

export default Importance
