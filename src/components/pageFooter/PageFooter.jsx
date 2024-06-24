import React, { memo } from 'react'

import FooterWrapper from './style'

const PageFooter = memo(() => {
  return (
    < FooterWrapper >
     <div className="content_mid content ">
        <div className="title">Booksure</div>
        <div className="text">
          © Copyright 2020 LuisFrag. All rights reserved.
        </div>
        <div className="icon">icon</div>
      </div>
    </FooterWrapper>
  )
})

export default PageFooter
