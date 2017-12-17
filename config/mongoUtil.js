const config   = require('./config');

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = config.dbConfig.dbURI;

// Database Name
const dbName = config.dbConfig.dbName;

let _db;

module.exports = {
  connectToServer: function( callback ) {
    MongoClient.connect( url, ( err, db ) => {
      _db = db.db(dbName);
      return callback( err );
    } );
  },
  getDb: function() {
    return _db;
  }
};