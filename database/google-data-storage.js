// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore')
const props = require('../config');

// Instantiate the datatstore
const projectId = props.get('GCLOUD_ID');
const datastore = Datastore({
  projectId: projectId,
});

/**
 * Save an entity to the google data storage using the specified entity key.
 * see https://googlecloudplatform.github.io/google-cloud-node/#/docs/datastore/1.1.0/datastore?method=save for documentation
 * @param {*} entityKey - entity key
 * @param {*} entityData - entity data
 */
function saveData(entityKey, entityData) {
    const taskKey = datastore.key(entityKey);
    const entity = {
        key: taskKey,
        // Included: Symbol, Timestamp
        excludeFromIndexes: [
            'ask',
            'askSize',
            'bid',
            'bidSize',
            'dailyChange',
            'dailyChangePerc',
            'high',
            'lastPrice',
            'low',
            'volume',
        ],
        data: entityData,
    };

    datastore.save(entity)
        .then(() => {
            console.log(`${entityKey} - ${taskKey.id} created successfully.`);
        })
        .catch((err) => {
            console.error('ERROR:', err);
        });
}

module.exports = saveData;
