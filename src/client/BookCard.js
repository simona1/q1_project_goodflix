const React = require('react')

class BookCard extends React.Component {
  render() {
    const book = this.props.book;
    return (
      <div className="col s1 m2">
        <div className="card book-card">
          <div className="card-image">
            <img src={book.image} />
          </div>
          <div className="card-content">
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.author}</div>
            {this._renderRating()}
          </div>
        </div>
      </div>
    );
  }

  _renderRating() {
    const rating = this.props.book.rating;
    const stars = [];
    for (let i = 0; i < rating; ++i) {
      stars.push(<i className="material-icons md-icon dp48">grade</i>);
    }
    return (
      <span
        className="book-rating"
        style={{width: Math.floor(24 * rating) + 'px'}}>
        {stars}
      </span>
    );
  }
}

module.exports = BookCard;
