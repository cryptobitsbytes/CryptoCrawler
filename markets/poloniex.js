const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();

const PoloniexApi = require('./poloniex-api');

module.exports = new PoloniexApi(poloniex);
