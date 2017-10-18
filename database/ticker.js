const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tickerSchema = new Schema({
    bid: Number,
    bidsize: Number,
    ask: Number,
    askSize: Number,
    dailyChange: Number,
    dailyChangePerc: Number,
    lastPrice: Number,
    volume: Number,
    high: Number,
    low: Number,
    symbol: String,
    timestamp: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Ticker', tickerSchema);
