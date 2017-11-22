const Bitfinex = require('bitfinex-api-node');
const addTicker = require('./database/google-data-storage.js');

// WS connection to bitfinex
const ws = new Bitfinex().ws;

ws.on('open', () => ws.subscribeTicker('BTCUSD'));

ws.on('ticker', (pair, ticker) => {
    ticker.symbol = 'BTCUSD';
    addTicker(ticker);
});
