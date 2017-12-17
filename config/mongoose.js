const config = require('../config/config');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongodbUrl = config.dbConfig.dbURI;

const connect = () => mongoose.connect(mongodbUrl, {
  useMongoClient: true
});

exports.connect = connect
