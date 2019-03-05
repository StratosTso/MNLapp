var mongoose = require('mongoose');
var mongodb = require('mongodb');

// DB key
var db = 'mongodb://localhost:27017/myDB'
// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true });

// Error control
var connection = mongoose.connection;
connection.on('connected', function() {
  console.log('-----------------');
  console.log('MongoDB connected');
  console.log('-----------------');
});

connection.on('disconnected', function() {
  console.log('-----------------');
  console.log('Disconnected from MongoDB');
  console.log('-----------------');
});

connection.on('error', function(error) {
    console.log('db connection error', error);
});

process.on('SIGINT', function() {
    connection.close(function() {
      console.log('-----------------');
      console.log('MongoDB connection closed due to process termination');
      console.log('-----------------');
      process.exit(0);
    });
});

module.exports = connection;
