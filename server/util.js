const request = require('request');

function getSearchResults(searchTerm, callback) {
  //console.log('sever helper got: ', searchTerm);
  searchTerm = searchTerm.term;
  console.log('helper: ', searchTerm);
  //request();
  callback();
}

module.exports.getSearchResults = getSearchResults;