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
                dbURI: "mongodb://127.0.0.1:27017",
                dbName: "TABD-teste"
            };
            break;
        }
        case 'development': {
            return {
                dbURI: "mongodb://127.0.0.1:27017",
                dbName: "TABD-dev"
            };
            break;
        }
        case 'production': {
            return {
                dbURI: "mongodb+srv://adrianlemess:03101994@fundatec-sagtt.mongodb.net",
                dbName: "TABD"
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