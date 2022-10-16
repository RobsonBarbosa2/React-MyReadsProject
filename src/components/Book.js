import React from "react";

const Book = ({ books, changeShelf }) => {
  const thumb = books.imageLinks;
  function getThumb(thumb) {
    let thumbUrl = thumb
      ? thumb.smallThumbnail
      : console.log("https://via.placeholder.com/128x193?text=No%20Cover");
    console.log(thumbUrl);
    return thumbUrl;
  }
  return (
    <div className="book" key={books.id}>
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${getThumb(thumb)})`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            defaultValue={books.shelf ? books.shelf : "none"}
            onChange={(e) => changeShelf(books, e.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title"> {books.title && books.title}</div>
      <div className="book-authors"> {books.authors && books.authors}</div>
    </div>
  );
};

export default Book;
