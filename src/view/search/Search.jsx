import React, { memo, useRef, useState } from 'react'

import SearchWrapper from './style'

import searchIcon from '@/assets/img/search-icon.svg'

import searchingIcon from '@/assets/img/searching.svg'

import { searchBooks } from '@/service'
import BookItem from '../../components/bookItem/BookItem'

import notCover from '@/assets/img/notCover.png'

const Search = memo(() => {
  const inputRef = useRef()

  //图书列
  const [bookList, setBookList] = useState([])
  //图书条数
  const [totalItems, setTotalItems] = useState(0)

  function clickHandle() {
    searchBooks(inputRef.current.value).then((res) => {
      console.log('请求结果:', res)
      setBookList(res.data.items)
      setTotalItems(res.data.totalItems)

      console.log(bookList, totalItems)
    })
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
        <div className="container">
          <input
            className="search-input"
            type="text"
            placeholder="Type author, book name . . ."
            ref={inputRef}
          />

          <button
            className="search-btn"
            onClick={(e) => {
              clickHandle()
            }}
          >
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </div>
      {totalItems === 0 && (
        <div className="book-icon">
          <img src={searchingIcon} alt="" />
        </div>
      )}

      <div className="books-container">
        {bookList.map((book) => {
          const volumeInfo = book.volumeInfo

          return (
            <BookItem
              imgUrl={
                volumeInfo.imageLinks?.thumbnail
                  ? volumeInfo.imageLinks?.thumbnail
                  : notCover
              }
              bookInfo={volumeInfo}
              key={book.id}
              className="book-item"
            ></BookItem>
          )
        })}
      </div>
    </SearchWrapper>
  )
})

export default Search
