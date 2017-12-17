const config  = require('./config/config');
const app = require('./config/express');
const database = require('./config/mongoose');

database.connect()
	.then(() => {
		app.listen(config.server.port, () => {
			console.log(`App rodando em ${config.server.host}:${config.server.port}`);
		});
	})


