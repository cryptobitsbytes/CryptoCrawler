// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');
const props = require('../config');

// Instantiate the datatstore
const projectId = props.get('GCLOUD_ID');
const datastore = Datastore({
  projectId: projectId,
});


// tick = {
//  bid :  
//  bidSize : 
//  ask :
//  askSize :
//  dailyChange :
//  dailyChangePerc :
//  lastPrice :
//  volume :
//  high :
//  low : 
//  symbol :
//  timestamp :
// };

function saveData(entityKey, entityData) {
    const taskKey = datastore.key(entityKey);
    const entity = {
        key: taskKey,
        data: entityData
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
