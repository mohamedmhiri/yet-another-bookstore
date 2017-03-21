var mongoose=require('mongoose');
var mongoUrl=process.env.MONGO_URL ||'mongodb://localhost:27017/data';

module.exports = function(app) {
  mongoose.connect(mongoUrl, {
    mongoose: {
      safe: true
    }
  }, function(err) {
    if (err) {
      return console.log('Mongoose - connection error:', err);
    }
  });

 

  return mongoose;
};
