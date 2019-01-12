import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {
    const listOfBooks = props.bookList.map((book) => {
        return <BookItem key={book.id} book={book} />
    });

    return (
        <div>
            {listOfBooks}
        </div>
    );
}

export default BookList;