const props = require('../config.js');
const mongoose = require('mongoose');
const ticker = require('./ticker.js');

const mongodb_host = props.get("MONGODB_HOST");
const mongodb_port = props.get("MONGODB_PORT");

console.log(`mongodb://${mongodb_host}:${mongodb_port}/crypto`);
mongoose.connect(`mongodb://${mongodb_host}:${mongodb_port}/crypto`).then(
    () => console.log('Succesfull connection'),
    (error) => console.log(error)
);


module.exports = {
    Ticker: ticker,
};
