const mongoose = require('mongoose');
const config   = require('./config');
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.dbURI);

db.on('error', console.error);

db.once('open', function() {
	console.log("Connect MongoDB!");
});

module.exports = mongoose;