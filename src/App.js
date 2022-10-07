import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import Book from "./components/Book";

const BooksApp = () => {
  const [SearchBooks, setSearchBooks] = useState([]);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [query, setQuery] = useState([]);
  const [books, setBooks] = useState([]);
  const [merged, setMerged] = useState([]);
  const [mapOfIdToBooks, setmapOfIdToBooks] = useState(new Map());

  useEffect(() => {
    const combined = SearchBooks.map((book) => {
      if (mapOfIdToBooks.has(book.id)) {
        return mapOfIdToBooks.get(book.id);
      } else {
        return book;
      }
    });
    setMerged(combined);
  }, [SearchBooks]);

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
      setmapOfIdToBooks(createMapOfBooks(data));
    });
  }, []);

  useEffect(() => {
    let isActivated = true;

    if (query) {
      BooksAPI.search(query).then((data) => {
        console.log(data);
        if (data.error) {
          setSearchBooks([]);
        } else {
          if (isActivated) {
            setSearchBooks(data);
          }
        }
      });
    }
    return () => {
      isActivated = false;
      setSearchBooks([]);
    };
  }, [query]);

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.forEach((book) => {
      map.set(book.id, book);
    });
    return map;
  };

  const updateBookShelf = (book, whereTo) => {
    const updatedBooks = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = whereTo;
        return book;
      }
      return b;
    });
    setBooks(updatedBooks);
    BooksAPI.update(book, whereTo);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <button
              className="close-search"
              onClick={() => setShowSearchPage(false)}
            >
              Close
            </button>
            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {merged.map((b) => (
                <li key={b.id}>
                  <Book books={b} changeShelf={updateBookShelf} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <Shelves books={books} updateBookShelf={updateBookShelf} />
          </div>
          <div className="open-search">
            <button onClick={() => setShowSearchPage(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksApp;
