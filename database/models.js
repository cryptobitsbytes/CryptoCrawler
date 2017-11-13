const props = require('../config.js');
const mongoose = require('mongoose');
const ticker = require('./ticker.js');

console.log(`mongodb://${props.MONGODB_HOST}:${props.MONGODB_PORT}/crypto`);
mongoose.connect(`mongodb://${props.MONGODB_HOST}:${props.MONGODB_PORT}/crypto`).then(
    () => console.log('Succesfull connection'),
    (error) => console.log(error)
);

module.exports = {
    Ticker: ticker,
};
