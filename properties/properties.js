// This checks wheter the properties are set in the environment. 
// If not, it uses the project.properties file
const propertiesReader = require('properties-reader');
const env = process.env;

const properties = propertiesReader('./properties/project.properties');

const HOST = properties.get('db.hostname');
const PORT = properties.get('db.port');


const MONGODB_HOST = env.MONGODB_HOST ? env.MONGODB_HOST : HOST;
const MONGODB_PORT = env.MONGODB_PORT ? env.MONGODB_PORT : PORT;

module.exports = {
  MONGODB_HOST: MONGODB_HOST,
  MONGODB_PORT: MONGODB_PORT,
};
