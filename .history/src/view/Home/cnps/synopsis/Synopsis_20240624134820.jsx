import React, { memo } from 'react'

import SynopsisWrapper from './style'
import apresentation from '@/assets/img/main-apresentation.svg'

const Synopsis = memo(() => {
  return (
    <SynopsisWrapper className="content_mid">
      <div className="content item">
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>
          Find the <span style={{ color: '#89c6ff' }}>books</span> you are
          looking for anywhere
        </div>
        <div style={{ color: '     #403e3e;' }}>
          Search for books anywhere, you don't need to know the name of the
          book, if you know the name of the author or the publisher, just type
          and search.
        </div>
      </div>
      <div className="item">
        <img className="img " src={apresentation} />
      </div>
    </SynopsisWrapper>
  )
})

export default Synopsis