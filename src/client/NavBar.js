const React = require('react');

class NavBar extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper #2196f3 blue">
            <div className="container">
              <a href="main.html" className="brand-logo center">
                <i className="material-icons left">library_books</i>
                <span>GoodFlix</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

module.exports = NavBar;
