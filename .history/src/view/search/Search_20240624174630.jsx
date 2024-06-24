import React, { memo } from 'react'

import SearchWrapper from './style'

const Search = memo(() => {
  return (
    <SearchWrapper className="content_mid">
      <div className="describe">
        <div>
          You don't need to know the name of the book, if you know the name of
          the author or publisher, just type, search and find
        </div>
        <div></div>
      </div>

      <div className="input">
        <input type="text" />
      </div>
    </SearchWrapper>
  )
})

export default Search
