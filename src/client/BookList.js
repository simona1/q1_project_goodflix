const BookCard = require('./BookCard.js');
const React = require('react');

class BookList extends React.Component {
  render() {
    const books = this.props.books;
    return (
      <div className="row">
        {this.props.books.map(book => <BookCard book={book} />)}
      </div>
    );
  }
}

module.exports = BookList;
