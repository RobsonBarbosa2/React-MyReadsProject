import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ books, title, updateBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((b) => (
            <li key={b.id}>
              <Book books={b} changeShelf={updateBookShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;

Shelf.propTypes = {
  books: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
