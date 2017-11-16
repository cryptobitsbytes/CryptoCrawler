const nconf = require('nconf');
const path = require('path');

nconf
  .argv()
  .env([
    'GCLOUD_ID',
    'KUBERNETES_SERVICE',
    'MONGODB_HOST',
    'MONGODB_PORT',
    'NODE_ENV',
  ])
  .file({file: path.join(__dirname, 'config.json')})
  .defaults({
    MONGODB_HOST: 'localhost',
    MONGODB_PORT: '27017',
    NODE_ENV: 'development',
  });
  // Check gcloud settings only when running production mode. 
  // Only necessary for cloud deployments

  // TODO Find out why this fails on Docker. Might not be needed anyway
  // if (nconf.get(NODE_ENV)==='production') {
  //   checkConfig('GCLOUD_ID');
  //   checkConfig('KUBERNETES_SERVICE');
  // }
/**
 * check if the setting is set, else throuw an error
 * @param {*} setting - the setting to check
 */
function checkConfig(setting) {
  if (!nconf.get(setting)) {
    throw new Error(`You must set ${setting} as an ` +
    `environment variable or in config.json!`);
  }
}

module.exports = nconf;