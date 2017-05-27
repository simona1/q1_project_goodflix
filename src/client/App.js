const React = require('react');
const bookSearch = require('./bookSearch.js');
const renderFooter = require('./renderFooter.js')
const renderNavBar = require('./renderNavBar.js');
const BookList = require('./BookList.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'hunger games',
      results: [],
      isSearching: false,
    };
  }

  render() {
    return (
      <div>
        {renderNavBar()}
        <div className="center-align">
          <div className="input-field inline inputContainer">
            <input
              type="text"
              value={this.state.query}
              onChange={this._onChangeQuery.bind(this)}
            />
          </div>
          <button
            className="waves-effect waves-light blue btn"
            disabled={this.state.isSearching}
            onClick={this._onSearch.bind(this)}>
            <i className="material-icons right">search</i>
            Search
          </button>
        </div>
        <BookList books={this.state.results} />
        {renderFooter()}
      </div>
    );
  }

  _renderResult(book) {
    return (
      <div>
        <span>{book.title} by {book.author}</span>
        <img src={book.image} />
      </div>
    );
  }

  _onSearch(e) {
    e.preventDefault();
    this.setState({isSearching: true}, () => {
      bookSearch(this.state.query).then(r => {
        window.results = r;
      
        const results = r.GoodreadsResponse.search[0].results[0].work.map(result => {
          const bestBook = result.best_book[0];
          const url = bestBook.image_url[0];
          return {
            title: bestBook.title[0],
            author: bestBook.author[0].name[0],
            image: bestBook.image_url[0],
            rating: parseFloat(result.average_rating[0]),
          };
        })
	this.setState({
          results: results,
          isSearching: false,
        });
      });
    });
  }

  _onChangeQuery(e) {
    this.setState({query: e.target.value});
  }
}

module.exports = App;
