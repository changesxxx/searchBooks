import React, { memo } from 'react'

import SearchWrapper from './style'

const Search = memo(() => {
  return (
    <SearchWrapper>
      <div className="describe">
        You don't need to know the name of the book, if you know the name of the
        author or publisher, just type, search and find
      </div>
    </SearchWrapper>
  )
})

export default Search
