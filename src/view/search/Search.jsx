import React, { memo,useState } from 'react'

import SearchWrapper from './style'

import searchIcon from '@/assets/img/search-icon.svg'

const Search = memo(() => {

  const [isClick, setClick] = useState(false)
  

  function clickHandle () { 
    setClick(true)

    setTimeout(() => {
      setClick(false);
    }, 50); // 1000毫秒后自动取消样式
  }

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
        <div className='container'>
        <input
          className="search-input"
          type="text"
          placeholder="Type author, book name . . ."
          />
          
          <button className={ `search-btn ${isClick ? "isClick" : ""}` }   onClick={e => {clickHandle() }}>
            <img src={searchIcon} alt="" />
          </button>
        </div>
     
      </div>
    </SearchWrapper>
  )
})

export default Search
