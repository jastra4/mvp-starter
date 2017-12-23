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
    unique: false,
    required: false
  },
  term: String
});
var Search = mongoose.model('Search', searchHistorySchema);

var selectAllGoogle = function(callback) {
  Google.find({}, function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectAllYahoo = function(callback) {
  Yahoo.find({}, function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectAllHistory = function(callback) {
  Search.find(function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var saveHistory = function(term) {
  var hist = new Search({
    id: term,
    term: term
  })
  hist.save(function(err, hist) {
    if(err) {
      console.log('search history save error: ',err);
    } else {
      console.log('Search history saved.');
    }
  })
}

var clearHistory = function(callback) {
    db.collection('searches').drop(function(err, db) {
    if (err) {
      console.log('clear error: ', err);
    } else {
      callback();
      console.log('Searches collection deleted');
    }
  });
}

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
    var source = result.items.splice(0, 1);
    result.items.forEach(function(result) {
      if (source[0] === 'Google') { ///
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

module.exports.selectAllGoogle = selectAllGoogle;
module.exports.selectAllYahoo = selectAllYahoo;
module.exports.selectAllHistory = selectAllHistory;
module.exports.clearHistory = clearHistory;
module.exports.save = save;
module.exports.saveHistory = saveHistory;