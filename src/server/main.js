const bodyParser = require('body-parser');
const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const parseXml = require('xml2js').parseString;
const queryString = require('query-string');

const GOODREADS_API_KEY = require('../../secrets.json').goodreads_api_key;

const app = express();

app.use(bodyParser.text());

app.get('/', function(req, res) {
  fs.readFile('main.html', function(err, data) {
    if (err) {
      res.status(404).send('Not Found');
      return;
    }
    res.send(data.toString());
  });
});

app.get('/style.css', function(req, res) {
  fs.readFile('style.css', function(err, data) {
    if (err) {
      res.status(404).send('Not Found');
      return;
    }
    res.set('Content-Type', 'text/css');
    res.send(data);
  });
});

app.get('/materialize.css', function(req, res) {
  fs.readFile('node_modules/materialize-css/dist/css/materialize.min.css', function(err, data) {
    if (err) {
      res.status(404).send('Not Found');
      return;
    }
    res.set('Content-Type', 'text/css');
    res.send(data);
  });
});

app.get('/material-icons.css', function(req, res) {
  fs.readFile('node_modules/material-icons/css/material-icons.css', function(err, data) {
    if (err) {
      res.status(404).send('Not Found');
      return;
    }
    res.set('Content-Type', 'text/css');
    res.send(data);
  });
});

app.get('/main.js', function(req, res) {
  fs.readFile('out.js', function(err, data) {
    if (err) {
      res.status(404).send('Not Found');
      return;
    }
    res.set('Content-Type', 'application/javascript');
    res.send(data);
  });
});

app.post('/api/search_books', (req, res) => {
  const query = req.body;
  const url =
    'https://www.goodreads.com/search/index.xml?' +
    queryString.stringify({
      key: GOODREADS_API_KEY,
      q: query,
    });
  fetch(url).then(r => r.text()).then(xml => {
    parseXml(xml, (err, data) => {
      res.set('Content-Type', 'application/json');
      res.send(data);
    });
  });
});

app.listen(3000);
