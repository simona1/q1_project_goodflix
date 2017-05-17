const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

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
  res.set('Content-Type', 'application/json');
  res.send([
    {title: 'hunger games'},
    {title: 'cloud atlas'}, 
    {title: 'the alchemist'}, 
  ].filter(book => book.title === query));
});


app.listen(3000);
