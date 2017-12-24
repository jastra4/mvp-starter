const request = require('request');
const config = require('../config.js');
var rp = require('request-promise');

function getSearchResults(searchTerm, callback) {
  searchTerm = searchTerm.term;
  const googleOptions = {url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.sid + '&q=' + searchTerm + '&num=' + 3};
  const yahooOptions = {url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.yho + '&q=' + searchTerm + '&num=' + 3};

  rp(googleOptions)
  .then(function(results) {
    var googleResults = results;
    rp(yahooOptions)
    .then(function(results) {
      var yahooResults = results;
      callback(googleResults, yahooResults);
    })
    .catch(function(error) {
      console.log('Yahoo API failure: ', error);
    })
  })
  .catch(function(error) {
    console.log('Google API failure: ', error);
  })
}

module.exports.getSearchResults = getSearchResults;

