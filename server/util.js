const request = require('request');
const config = require('../config.js');
var rp = require('request-promise');

function getSearchResults(searchTerm, callback) {
  searchTerm = searchTerm.term;
  const googleOptions = {url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.sid + '&q=' + searchTerm + '&num=' + 10};
  const yahooOptions = {url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.yho + '&q=' + searchTerm + '&num=' + 10};
  // LIVE API
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
  // TEST DATA
  // var googleTest = JSON.stringify(  { 
  //   items:[
  //     {
  //       title: 'dogs1',
  //       snippet: 'look at some dogs',
  //       link: 'www.google.com/whateverasdfsdfsdfsdfasdfsadfsafdsdf'
  //     }, 
  //     {
  //       title: 'dogs2',
  //       snippet: 'look more dogs',
  //       link: 'www.google.com/whatever'
  //     }, 
  //     {
  //       title: 'dogs3',
  //       snippet: 'look this dog',
  //       link: 'www.google.com/whatever'
  //     }
  //   ]
  // });
  // var yahooTest = JSON.stringify(
  // { 
  //   items:[
  //     {
  //       title: 'cats1',
  //       snippet: 'look at some cats',
  //       link: 'www.yahoo.com/whateverasdfsdfsadfsadfsadfasdfsdafasdf'
  //     }, 
  //     {
  //       title: 'cats2',
  //       snippet: 'look more cats',
  //       link: 'www.yahoo.com/whatever'
  //     }, 
  //     {
  //       title: 'cats3',
  //       snippet: 'look this cat',
  //       link: 'www.yahoo.com/whatever'
  //     }
  //   ]
  // });
  // callback(googleTest, yahooTest);

}

module.exports.getSearchResults = getSearchResults;

