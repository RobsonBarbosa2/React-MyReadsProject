import React, {useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Header from './components/Header';
import Shelves from './components/Shelves';



const BooksApp = () => {
  const bookshelves = [
    { shelf: 'Currently Reading' },
    { shelf: 'Want to Read' },
    { shelf: 'Have Read' },
  ];

    const startBooks = [
      {
        id: 1,
        url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        shelf: "currentlyReading"
      },
      {
        id: 2,
        url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        shelf: "wantToRead"
      }
    ]

    const [showSearchPage, setShowSearchPage] = useState(false);

    const [books, setBooks] = useState(startBooks)
  
    const updateBookShelf = (book, whereTo) => {
      console.log(book)
      console.log(whereTo)
      const updatedBooks = books.map(b => {
        if (b.id === book.id) {
          book.shelf = whereTo;
          return book;
        }
        return b;
      })
      setBooks(updatedBooks);
    }

    return (
      <div className="app">
      {console.log(books)}
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <button className="close-search" onClick={() => setShowSearchPage(false)}>Close</button>
            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input type="text" placeholder="Search by title or author" />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <Shelves books={books} updateBookShelf={updateBookShelf} />
          </div>
          <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
          </div>
        </div>
      )}
    </div>
    );
  }



export default BooksApp;
