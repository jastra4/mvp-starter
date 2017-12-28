const queryAPI = require('./util.js');
const db = require('../database-mongo/index.js');
//var express = require('express');
var Promise = require('bluebird');
var express = Promise.promisifyAll(require('express'));
var bodyParser = require('body-parser');

var yahoos = require('../database-mongo');
var googles = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser());

app.post('/query', function(req, res) {
  queryAPI.getSearchResults(req.body, function(googleResults, yahooResults) {
    db.saveYahoo(JSON.parse(yahooResults), function() {
      db.saveGoogle(JSON.parse(googleResults), function() {
        db.saveHistory(req.body.term, function() {
          res.sendStatus(201);
        });
      });
    });
  });
});

app.get('/clear', function(req, res) {
  db.clearHistory(function() {
    res.sendStatus(200);
  })
});


app.get('/update', function (req, res) {
  db.selectAllGoogle(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      var results = [];
      results.push(data)
      db.selectAllYahoo(function(err, data) {
        results.push(data);
        db.selectAllHistory(function(err, data) {
          results.push(data);
          res.json(results);
        })
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
