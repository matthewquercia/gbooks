var books = require('google-books-search');

export let data = [];

var options = {
    limit: 30
};

export function searchBooks(title, callback) {
    books.search(title, options, function (err, results) {
        if (!err) {
            callback(results);
        } else {
            console.log('ERROR: ' + err);
        }
    });
}