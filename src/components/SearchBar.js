import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    onTermChange = (event) => {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm} className="ui form">
                <div className="ui fluid icon input">
                    <input placeholder="Search for a book.." type="text" value={this.state.term}
                        onChange={this.onTermChange} />
                    <i className="circular search link icon" onClick={this.onSubmitForm}></i>
                </div>
            </form>
        )
    }
}

export default SearchBar;