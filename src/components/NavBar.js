import React from 'react';
import SearchBar from './SearchBar';

class NavBar extends React.Component {
    render() {
        return (
            <div className="ui inverted segment" >
                <div className="ui inverted secondary pointing menu">
                    <a className="item active"><i className="fas fa-book-open" style={{ marginRight: 4 }}></i>library</a>
                </div>
                <SearchBar onFormSubmit={this.props.onFormSubmit} />
            </div>
        )
    }
}

export default NavBar;