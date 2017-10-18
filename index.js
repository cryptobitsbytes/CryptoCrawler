const Bitfinex = require('bitfinex-api-node');
const models = require('./database/models.js');
const Ticker = models.Ticker;

// WS connection to bitfinex
const ws = new Bitfinex().ws;


ws.on('open', () => ws.subscribeTicker('BTCUSD'));

ws.on('ticker', (pair, ticker) => {
    ticker.symbol = 'BTCUSD';
    tick = new Ticker(ticker);
    tick.save( (error) => {
        if (error) console.error(error);
    });
});
