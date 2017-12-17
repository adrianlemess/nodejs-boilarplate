const mongoHandler = require("../service/filmeService");
const Filme = require('../model/filme');

const COLLECTION = "movies";
const operations = {};

operations.save = (req, res) => {
	const filme = new Filme(req.body);
	mongoHandler.save(filme, COLLECTION)
		.then(data => res.status(200).json({ mensagem: resposta }))
		.catch(err => res.status(404).json({ erro: `Operation Invalid ${err}`}))
};

module.exports = operations;

