const Filme = require('../model/filme');

const operations = {};

operations.save = (req, res) => {
	const filme = new Filme(req.body);

	filme.save()
		.then(resposta => res.status(200).json({ mensagem: resposta }))
		.catch(err => res.status(404).json({ erro: `Operation Invalid ${err}`}))
};

module.exports = operations;

