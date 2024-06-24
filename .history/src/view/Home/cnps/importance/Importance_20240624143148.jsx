import React, { memo } from 'react'

import ImportanceWrapper from './style'

import home1 from '@/assets/img/home-1.svg'

const Importance = memo(() => {
  return (
    <ImportanceWrapper className="content_mid">
      <div className="title">The Importance of reading books</div>

      <div className="item">
        <div className="text">
          <div
            style={{
              paddingBottom: '.5rem',
              fontSize: '1.25rem',
              marginBottom: '8px',
            }}
          >
            READING PRACTICE IMPROVES VOCABULARY
          </div>

          <div
            style={{
              fontSize: '1.1rem',
              color: '#403e3e',
              fontFamily: 'Comfortaa-Light',
            }}
          >
            Whether for pleasure, study or information, reading practice
            improves vocabulary and streamlines reasoning and interpretation.
          </div>
        </div>
        <div className="img">
          <img src={home1} alt="" />
        </div>

              <div
            style={{
              fontSize: '1.1rem',
              color: '#403e3e',
              fontFamily: 'Comfortaa-Light',
            }}
          >
            Whether for pleasure, study or information, reading practice
            improves vocabulary and streamlines reasoning and interpretation.
          </div>
        </div>
        <div className="img">
          <img src={home1} alt="" />
      </div>
      
            <div
            style={{
              fontSize: '1.1rem',
              color: '#403e3e',
              fontFamily: 'Comfortaa-Light',
            }}
          >
            Whether for pleasure, study or information, reading practice
            improves vocabulary and streamlines reasoning and interpretation.
          </div>
        </div>
        <div className="img">
          <img src={home1} alt="" />
        </div>
      </div>
    </ImportanceWrapper>
  )
})

export default Importance
