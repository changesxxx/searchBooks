import React, { memo } from 'react'

import HeaderWrapper from './style'

const PageHeader = memo(() => {
  return (
    <HeaderWrapper className="content_mid">
      <div className="title">Booksure</div>
      <div className="other">
        <div>About</div>
        <div>Contoct</div>
      </div>
    </HeaderWrapper>
  )
})

export default PageHeader
