const Bitfinex = require('bitfinex-api-node');
const databaseSave = require('./database/google-data-storage.js');

// WS connection to bitfinex
const ws = new Bitfinex().ws;

ws.on('open', () => ws.subscribeTicker('BTCUSD'));

ws.on('ticker', (pair, ticker) => {
    ticker.symbol = 'BTCUSD';
    databaseSave("Ticker" ,ticker);
});
