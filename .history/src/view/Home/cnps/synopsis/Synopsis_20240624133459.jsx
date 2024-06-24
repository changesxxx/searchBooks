import React, { memo } from 'react'

import SynopsisWrapper from './style'
import apresentation from '@/assets/img/main-apresentation.svg'

const Synopsis = memo(() => {
  return (
    <SynopsisWrapper className="content_mid">
      <div className="content item">
        Find the books you are looking for anywhere
      </div>
      <div className="item">
        <img className="img " src={apresentation} />
      </div>
    </SynopsisWrapper>
  )
})

export default Synopsis
