var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var googleSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  title: String,
  snippet: String,
  link: String
});
var Google = mongoose.model('Google', googleSchema);

var yahooSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  title: String,
  snippet: String,
  link: String
});
var Yahoo = mongoose.model('Yahoo', yahooSchema);

var searchHistorySchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  term: String
});
var Search = mongoose.model('Search', searchHistorySchema);

var selectAll = function(callback) {
  Google.find({}, function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var save = function(results) {
  db.collection('googles').drop(function(err, db) {
    if (err) {
      console.log(err);
    } else {
      console.log('Google collection deleted');
    }
  });
  db.collection('yahoos').drop(function(err, db) {
    if (err) {
      console.log(err);
    } else {
      console.log('Yahoo collection deleted');
    }
  });

  results.forEach(function(result) {
    result.items.forEach(function(result) {
      console.log('result: ', result);    
      if (result.link === 'https://www.google.com') {
        var res = new Google({
          id: result.cacheId,
          title: result.title,
          snippet: result.snippet,
          link: result.link
        })
      } else {
        var res = new Yahoo({
          id: result.cacheId,
          title: result.title,
          snippet: result.snippet,
          link: result.link
        })        
      } 

      res.save(function(error, res) {
        if (error) {
          console.log('DB failed to save', error);
        } else {
          console.log('DB saved successfully!');
        }
      })
    });
  });  
}

module.exports.selectAll = selectAll;
module.exports.save = save;