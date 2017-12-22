const request = require('request');

function getSearchResults(searchTerm, callback) {
  //console.log('sever helper got: ', searchTerm);
  searchTerm = searchTerm.term;
  console.log('helper: ', searchTerm);
  let options = {
    url: 'https://www.googleapis.com/customsearch/v1?' + searchTerm,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, fucntion(error, response, body) {
    if (error) {
    	console.log(error);
    } else {
    	var results = JSON.parse(body)
      callback(results);
    }
  });

}

module.exports.getSearchResults = getSearchResults;