const React = require('react');
const bookSearch = require('./bookSearch.js');

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
        <div>
          <input
            type="text"
            value={this.state.query}
            onChange={this._onChangeQuery.bind(this)}
          />
          <button
            className="waves-effect waves-light btn"
            disabled={this.state.isSearching}
            onClick={this._onSearch.bind(this)}>
            Search
          </button>
        </div>
        <pre>{JSON.stringify(this.state.results, null, 2)}</pre>
      </div>
    );
  }

  _onSearch(e) {
    e.preventDefault();
    this.setState({isSearching: true}, () => {
      bookSearch(this.state.query).then(results => {
	this.setState({results: results, isSearching: false});
      });
    });
  }

  _onChangeQuery(e) {
    this.setState({query: e.target.value});
  }

}

module.exports = App;
