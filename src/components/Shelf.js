import React, {Component} from 'react'
import Book from './Book'

const Shelf = ({books}) => {

    return (
        <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Book></Book>
                  </li>
                </ol>
              </div>
            </div>
    )
}

export default Shelf