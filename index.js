const config  = require('./config/config');
const app = require('./config/express');
const mongoUtil = require( './config/mongoUtil' );

mongoUtil.connectToServer(( err ) => {
	if(err) throw new Error(err);
	else {
		console.log('Banco conectado com sucesso')
		app.listen(config.server.port, () => {
			console.log(`App rodando em ${config.server.host}:${config.server.port}`);
		});
	}
} );
