import React from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import NavBar from './NavBar';
import * as bookSearch from './../apis/googleBookSearch';
import './styles/App.css';

class App extends React.Component {
    state = { books: [] };

    onTermSubmit = (book) => {
        bookSearch.searchBooks(book, (data) => {
            this.setState({ books: data });
            console.log(this.state.books);
        });
        console.log(book);
    }

    render() {
        return (
            <div className="bg-image">
                <NavBar onFormSubmit={this.onTermSubmit} />
                <div className="ui container">
                    <BookList bookList={this.state.books} />
                </div >
            </div >
        );
    }
}

export default App;