import React from 'react';
import './styles/BookItem.css';

const BookItem = (props) => {
    return (
        <div className="ui segment">
            <h1>{props.book.title}</h1>
            <h3><i>by {props.book.authors}</i></h3>
            <img alt={props.book.title} src={props.book.thumbnail} />
            <div className="ui segment">
                <p><label className="ui blue label tiny">Publisher </label> {props.book.publisher}</p>
                <p><label className="ui olive label tiny">Published on </label> {props.book.publishedDate} </p>
                <p><label className="ui green label tiny">Average rating </label> {(props.book.averageRating) ? props.book.averageRating + " / 5" : 'No rating available'} </p>
                <p><label className="ui teal label tiny">Supported language </label> {props.book.language} </p>
                <p>{props.book.description} </p>
                <a href={props.book.link} target="_blank" rel="noopener noreferrer"
                    className="ui yellow button">Buy this book now!</a>
            </div>
        </div >
    );
}

export default BookItem;