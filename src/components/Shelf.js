import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

import { useAutoAnimate } from "@formkit/auto-animate/react";

const Shelf = ({ books, title, updateBookShelf }) => {
  const [parent] = useAutoAnimate(/* optional config */);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol ref={parent} className="books-grid">
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
