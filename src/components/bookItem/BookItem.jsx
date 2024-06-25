import React, { memo } from 'react'

import BookWrapper from './style'

const BookItem = memo((props) => {
  const { imgUrl, bookInfo } = props

  return (
    <BookWrapper>
      <div className="book">
        <div className="cover">
          <img src={imgUrl} alt="封面..." />
        </div>
        <div className="book-info">
          <div className="title">{bookInfo?.title}</div>
          <div className="authors">
            <span className="item-title">Authors:</span>
            {bookInfo?.authors}
          </div>
          <div className="date">
            <span className="item-title">Published Date:</span>

            {bookInfo?.publishedDate}
          </div>
          <div className="publisher">
            <span className="item-title">Publisher:</span>
            {bookInfo?.publisher}
          </div>
        </div>
      </div>
    </BookWrapper>
  )
})

export default BookItem
