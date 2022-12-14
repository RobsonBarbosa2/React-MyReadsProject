import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Header from './components/Header';
class BooksApp extends Component {
  bookshelves = [
    { shelf: 'Currently Reading' },
    { shelf: 'Want to Read' },
    { shelf: 'Have Read' },
  ];
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [
      {
        url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        shelf: ""
      },

    ]
  };

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<List/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </div>
    );
  }
}

class List extends Component {
  render() {
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                              'url("")',
                          }}
                        />
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title"></div>
                      <div className="book-authors">Harper Lee</div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

          </div>
        </div>
        <div className="open-search">
          <Link to="Search">
            <button>Add a Book</button>
          </Link>
          {/* <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button> */}
        </div>
      </div>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          {/* <button
            className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </button> */}
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
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default BooksApp;
