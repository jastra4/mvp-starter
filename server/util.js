const request = require('request');
const config = require('../config.js');
var rp = require('request-promise');

function getSearchResults(searchTerm, callback) {
  // console.log('request helper received: ', searchTerm.term);
  searchTerm = searchTerm.term;
  const googleOptions = {
    url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.sid + '&q=' + searchTerm,
    headers: {
      num: 2
    }
  };
  const yahooOptions = {url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.yho + '&q=' + searchTerm,
    headers: {
      num: 2
    }
  };
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
  //let options = {url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.sid + '&q=' + searchTerm};
  rp(googleOptions)
  .then(function(results) {
    var googleResults = results;
    rp(yahooOptions)
    .then(function(results) {
      var yahooResults = results;
      callback(googleResults, yahooResults)
    })
    .catch(function(error) {
      console.log('Yahoo API failure: ', error);
    })
  })
  .catch(function(error) {
    console.log('Google API failure: ', error);
  })

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
  // var fakeData = {items: [{title:'puppies!' ,link: 'https://www.google.com',snippet:'look at some puppies', cacheId:'asdf' }]};
  // callback(fakeData)

}

module.exports.getSearchResults = getSearchResults;

