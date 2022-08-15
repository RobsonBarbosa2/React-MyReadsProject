import React from 'react'
import Shelf from './Shelf';

const Shelves = ({books}) => {
    const currentlyReading = books.filter((book) => book.Shelf === "currentlyReading");
    const wantToRead = books.filter((book) => book.Shelf === "wantToRead");
    const read = books.filter((book) => book.Shelf === "read");
    return (
        <div>
            <Shelf title="Currently Reading" books={currentlyReading}/>
            <Shelf title="Want To Read" books={wantToRead}/>
            <Shelf title="Read" books={read}/>
        </div>
    )
}

export default Shelves