const request = require('request');
const config = require('../config.js');

function getSearchResults(searchTerm, callback) {
  console.log('request helper received: ', searchTerm.term);
  searchTerm = searchTerm.term;

  // Google
  // let options = {url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.sid + '&q=' + searchTerm}
  // request(options, function(error, response, body) {
  //   if (error) {
  //   	console.log(error);
  //   } else {
  //   	var results = JSON.parse(body)
  //     callback(results);
  //   }
  // });
  // Yahoo
  // let options = {url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.yho + '&q=' + searchTerm}
  // request(options, function(error, response, body) {
  //   if (error) {
  //    console.log(error);
  //   } else {
  //    var results = JSON.parse(body)
  //     callback(results);
  //   }
  // });
  // Test
  var fakeData = {items: [{title:'puppies!' ,link: 'https://www.google.com',snippet:'look at some puppies', cacheId:'asdf' }]};
  callback(fakeData)

}

module.exports.getSearchResults = getSearchResults;

