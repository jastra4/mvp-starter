const queryAPI = require('./util.js');
const db = require('../database-mongo/index.js');
var express = require('express');
var bodyParser = require('body-parser');

//var items = require('../database-mongo');
var yahoos = require('../database-mongo');
var googles = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser());

app.post('/items', function(req, res) {  
  queryAPI.getSearchResults(req.body, function(results) {
    db.save(results);
    res.sendStatus(201);
  });
});

app.get('/items', function (req, res) {
  db.selectAllGoogle(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      var results = [];
      results.push(data)
      db.selectAllYahoo(function(err, data) {
        results.push(data);
        res.json(results);
      });
    }
  });
});

app.get('/yahoo', function (req, res) {
  yahoos.selectAllYahoo(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('YAHOO DATA: ', data);
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

// save search term to db
// display db info on clickable list
// send post request to APIs on click

// set up yahoo api
// make display update automatically
// limit results
// order results
