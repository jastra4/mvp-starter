var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  title: String,
  snippet: String,
  link: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var save = function(results) {
  results.forEach(function(result) {
    result.items.forEach(function(result) {
      console.log('result: ', result);      
      var res = new Item({
        id: result.cacheId,
        title: result.title,
        snippet: result.snippet,
        link: result.link
      })
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