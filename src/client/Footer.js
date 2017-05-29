const React = require('react');

class Footer extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="page-footer #2196f3 blue">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h5 className="grey-text text-lighten-4">
                  <i className="material-icons left">library_books</i>
                  <span>GoodFlix</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">© 2017 GoodFlix</div>
          </div>
        </footer>
      </div>
    );
  }

}

module.exports = Footer;
