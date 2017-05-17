const React = require('react');
const bookSearch = require('./bookSearch.js');
const renderNavBar = require('./renderNavBar.js');

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
          {renderNavBar()}
          <div className="input-field inline">
            <input
              type="text"
              value={this.state.query}
              onChange={this._onChangeQuery.bind(this)}
            />
          </div>
          <button
            className="waves-effect waves-light #2196f3 blue btn"
           disabled={this.state.isSearching}
            onClick={this._onSearch.bind(this)}>
            Search <i className="material-icons right">search</i> 
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
