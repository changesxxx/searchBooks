import React, { memo } from 'react'

import ErrorWrapper from './style'

const Error = memo(() => {
  return (
    <ErrorWrapper>
      <div class="main">
        <div class="antenna">
          <div class="antenna_shadow"></div>
          <div class="a1"></div>
          <div class="a1d"></div>
          <div class="a2"></div>
          <div class="a2d"></div>
          <div class="a_base"></div>
        </div>
        <div class="tv">
          <div class="cruve"></div>
          <div class="display_div">
            <div class="screen_out">
              <div class="screen_out1">
                <div class="screen">
                  <span class="notfound_text"> NOT FOUND</span>
                </div>
              </div>
            </div>
          </div>
          <div class="lines">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
          <div class="buttons_div">
            <div class="b1">
              <div></div>
            </div>
            <div class="b2"></div>
            <div class="speakers">
              <div class="g1">
                <div class="g11"></div>
                <div class="g12"></div>
                <div class="g13"></div>
              </div>
              <div class="g"></div>
              <div class="g"></div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="base1"></div>
          <div class="base2"></div>
          <div class="base3"></div>
        </div>
      </div>
      <div class="text_404">
        <div class="text_4041">4</div>
        <div class="text_4042">0</div>
        <div class="text_4043">4</div>
      </div>
    </ErrorWrapper>
  )
})

export default Error
