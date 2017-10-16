const Bitfinex = require('bitfinex-api-node');

// WS connection to bitfinex
const ws = new Bitfinex().ws;


ws.on('open', () => ws.subscribeTicker('BTCUSD'));

ws.on('ticker', (pair, ticker) => console.log(ticker));
