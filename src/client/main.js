const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App.js');

window.onload = function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );
};
