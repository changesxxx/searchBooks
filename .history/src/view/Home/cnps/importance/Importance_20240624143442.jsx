import React, { memo } from 'react'

import ImportanceWrapper from './style'

import home1 from '@/assets/img/home-1.svg'
import home2 from '@/assets/img/home-2.svg'
import home3 from '@/assets/img/home-3.svg'

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
      </div>

      <div className="item">
        <div className="img">
          <img src={home2} alt="" style={{ marginLeft: 'auto' }} />
        </div>
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
      </div>

      <div className="item">
        <div className="text">
          <div
            style={{
              paddingBottom: '.5rem',
              fontSize: '1.25rem',
              marginBottom: '8px',
            }}
          >
            DYNAMIC READING
          </div>

          <div
            style={{
              fontSize: '1.1rem',
              color: '#403e3e',
              fontFamily: 'Comfortaa-Light',
            }}
          >
            Dynamic and relaxed reading is one of the best ways to acquire
            information. The ideal is to learn to read informative texts,
            scientific articles, textbooks, educational books, etc.
          </div>
        </div>
        <div className="img">
          <img src={home3} alt="" />
        </div>
      </div>
    </ImportanceWrapper>
  )
})

export default Importance
