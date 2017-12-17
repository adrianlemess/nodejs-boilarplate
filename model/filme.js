const mongoose = require('mongoose');

const filmeSchema = mongoose.Schema({
   titulo: String, 
   genero: String
});

module.exports = mongoose.model('Filmes', filmeSchema);