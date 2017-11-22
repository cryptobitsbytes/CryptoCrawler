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

// Add tick replace hardcoded values with nconf
function addTick (tickData) {
  const taskKey = datastore.key('Tick'); //hardcoded
  const entity = {
    key: taskKey,
    data: tickData
  };

  datastore.save(entity)
    .then(() => {
      console.log(`Task ${taskKey.id} created successfully.`);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
}

module.exports=addTick;
