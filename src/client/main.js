const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App.js');
const Card = require('./Card.js');
const Footer = require('./Footer.js');
const NavBar = require('./NavBar.js');
const Rating = require('./Rating.js');

window.onload = function() {
  ReactDOM.render(
    <App />,
/*
    <div>
      <NavBar />
      <Card
        imageUrl={'http://ksassets.timeincuk.net/wp/uploads/sites/55/2012/06/startrekblog.jpg'}
        heading={'Star Trek Beyond'}
        subheading={'2011'}
        rating={4.5}
      />
      <Footer />
    </div>,
*/
    document.getElementById('app'),
  );
};
