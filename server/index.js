const queryAPI = require('./util.js');
const db = require('../database-mongo/index.js');
var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser());

app.post('/items', function(req, res) {
  console.log('server received request from client: ', req.body);
  queryAPI.getSearchResults(req.body, function(results) {
  	console.log('server received results from service: ', results.items.length, results.items[0]);
    db.save(results.items);
    res.sendStatus(201);
  });
});

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

// results.items[0].title
// results.items[0].link
// results.items[0].snippet
