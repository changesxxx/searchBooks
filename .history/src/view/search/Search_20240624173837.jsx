import React, { memo } from 'react'

import SearchWrapper from './style'

const Search = memo(() => {
  return (
    <SearchWrapper>
      <div className="describe content_mid">
        <div>
          You don't need to know the name of the book, if you know the name of
          the author or publisher, just type, search and find
        </div>
        <div></div>
      </div>
    </SearchWrapper>
  )
})

export default Search
