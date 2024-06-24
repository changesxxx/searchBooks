import React, { memo } from 'react'

import { useNavigate } from 'react-router-dom'

import HeaderWrapper from './style'

const PageHeader = memo(() => {
  const navigate = useNavigate()

  function goHome() {
    navigate('/home')
  }

  return (
    <HeaderWrapper className="content_mid">
      <div
        className="title"
        onClick={() => {
          goHome()
        }}
      >
        Booksure
      </div>
      <div className="other">
        <div className="item">About</div>
        <div className="item">Contoct</div>
      </div>
    </HeaderWrapper>
  )
})

export default PageHeader
