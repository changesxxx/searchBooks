import React, { memo } from 'react'

import HeaderWrapper from './style'

const PageHeader = memo(() => {
  return (
    <HeaderWrapper className="content_mid">
      <div className="title">Booksure</div>
      <div className="other">
        <div className="item">About</div>
        <div className="item">Contoct</div>
      </div>
    </HeaderWrapper>
  )
})

export default PageHeader
