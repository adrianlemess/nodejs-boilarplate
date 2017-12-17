const config = {};

config.environment = process.env.NODE_ENV;

// Server settings
config.server = {
    host: process.env.IP || 'localhost',
    port: process.env.PORT || 3000
};

const getDbConfig = () => {
    console.log(config.environment)
    switch(config.environment) {
        case 'test': {
            return  {
                dbURI: "mongodb://127.0.0.1:27017/TABD-test"            
            };
            break;
        }
        case 'development': {
            return {
                dbURI: "mongodb://127.0.0.1:27017/TABD-dev"            
            };
            break;
        }
        case 'production': {
            return {
                dbURI: `mongodb://adrianlemess:03101994@fundatec-shard-00-00-sagtt.mongodb.net:27017,fundatec-shard-00-01-sagtt.mongodb.net:27017,fundatec-shard-00-02-sagtt.mongodb.net:27017/TABD?ssl=true&replicaSet=Fundatec-shard-0&authSource=admin` 
            };
            break;
        }
        default:
            throw new Error('Environment invalid')
    }
}

// MongoDB settings
config.dbConfig = getDbConfig()

// Export configuration object
module.exports = config;