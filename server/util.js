const request = require('request');
const config = require('../config.js');

function getSearchResults(searchTerm, callback) {
  console.log('request helper received: ', searchTerm.term);
  searchTerm = searchTerm.term;

  let options = {
    url: 'https://www.googleapis.com/customsearch/v1?key=' + config.token +'&cx=' + config.sid + '&q=' + searchTerm,
    // headers: {
    //   'User-Agent': 'request',
    //   'Authorization': `token ${config.TOKEN}`
    // }
  };
  // this works, but google API only gets 100 queries a day
  // request(options, function(error, response, body) {
  //   if (error) {
  //   	console.log(error);
  //   } else {
  //   	var results = JSON.parse(body)
  //     callback(results);
  //   }
  // });
  var fakeData = {items: [{title:'puppies!' ,link: 'https://www.google.com',snippet:'look at some puppies' }]};
  callback(fakeData)

}

module.exports.getSearchResults = getSearchResults;

// <script>
//   (function() {
//     var cx = '013073695205404143036:mfgwsplmimg';
//     var gcse = document.createElement('script');
//     gcse.type = 'text/javascript';
//     gcse.async = true;
//     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(gcse, s);
//   })();
// </script>
// <gcse:search></gcse:search>