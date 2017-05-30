const React = require('react');
const ItemList = require('./ItemList.js');
const bookSearch = require('./bookSearch.js');
const movieSearch = require('./movieSearch.js');
const QueryTypes = require('./QueryTypes.js');
const Footer = require('./Footer.js')
const NavBar = require('./NavBar.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
      isSearching: false,
      searchByBook: true,
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="center-align">
          <div className="input-field inline inputContainer">
            <select className="searchType" value={this.state.searchByBook ? 'books' : 'movies'} onChange={this._onChangeSearchType.bind(this)}>
              <option value="books">Books</option>
              <option value="movies">Movies</option>
            </select>
            <input
              id="searchBar"
              placeholder="type search here"
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
        <ItemList items={this.state.results} />
        <Footer />
      </div>
    );
  }

  _onSearch(e) {
    e.preventDefault();
    if (this.state.searchByBook) {
      this._onBookSearch(e);
    } else {
      this._onMovieSearch(e);
    }
  }

  _onBookSearch(e) {
    e.preventDefault();
    this.setState({isSearching: true}, () => {
      bookSearch(this.state.query).then(r => {
        window.results = r;
      
        const results = r.GoodreadsResponse.search[0].results[0].work.map(result => {
          const bestBook = result.best_book[0];
          const url = bestBook.image_url[0];
          return {
            heading: bestBook.title[0],
            subheading: bestBook.author[0].name[0],
            imageUrl: bestBook.image_url[0],
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


  _onMovieSearch(e) {
    e.preventDefault();
    this.setState({isSearching: true}, () => {
      movieSearch(this.state.query).then(r => {
        window.results = r;
      
        const results = r.results.map(result => {
          const bestMovie = result;
          const url = 'https://image.tmdb.org/t/p/w500/' + bestMovie.poster_path;

          return {
            heading: bestMovie.title,
            subheading: bestMovie.release_date.split('-')[0],
            imageUrl: url,
            rating: bestMovie.vote_average / 2,
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

  _onChangeSearchType(e) {
    this.setState({searchByBook: e.target.value === 'books'});
  }
}

module.exports = App;
