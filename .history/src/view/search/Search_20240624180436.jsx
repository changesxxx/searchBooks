import React, { memo } from 'react'

import SearchWrapper from './style'

import searchIcon from '@/assets/img/search-icon.svg'

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
        <input
          className="search-input"
          type="text"
          placeholder="Type author, book name . . .1"
        />
      </div>
    </SearchWrapper>
  )
})

export default Search
