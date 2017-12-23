const request = require('request');
const config = require('../config.js');
var rp = require('request-promise');

function getSearchResults(searchTerm, callback) {
  // console.log('request helper received: ', searchTerm.term);
  searchTerm = searchTerm.term;
  const googleOptions = {
    url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.sid + '&q=' + searchTerm
  };
  const yahooOptions = {url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.yho + '&q=' + searchTerm
  };
  var reply = [];

  // rp(googleOptions)
  // .then(function(results) {
  //   reply.push(results);
  //   rp(yahooOptions)
  //   .then(function(results) {
  //     reply.push(results);
  //     callback(results)
  //   })
  //   .catch(function(error) {
  //     console.log('Yahoo API failure: ', error);
  //   })
  // })
  // .catch(function(error) {
  //   console.log('Google API failure: ', error);
  // })

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
  var fakeGoogleData = {items: [{title:'puppies!' ,link: 'https://www.google.com',snippet:'look at some puppies', cacheId:'asdf' }]};
  var fakeYahooData = {items: [{title:'cats!' ,link: 'https://www.yahoo.com',snippet:'look at some CATS', cacheId:'hjkl' }]};
  reply.push(fakeGoogleData);
  reply.push(fakeYahooData)
  callback(reply)

}

module.exports.getSearchResults = getSearchResults;

