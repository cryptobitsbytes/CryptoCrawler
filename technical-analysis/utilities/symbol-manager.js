const events = require('events');
const Tracker = require('./tracker');

module.exports = class SymbolManager extends events.EventEmitter {
    get symbol() {
        return this._symbol;
    }

    constructor(symbol, taBuyArray, taSellArray) {
        super();
        this._symbol = symbol;
        this._tracker = new Tracker();
        this._taBuyArray = taBuyArray;
        this._taSellArray = taSellArray;
        this.setTrackerTA();
    }

    onTicker(ticker) {
        // check running time of push.
        // If O(n) should maybe consider something else
        // since event can be emitted before new ticker data
        this._tracker.insert(ticker);
        const buyTriggerBool = this.buyTrigger();
        if (buyTriggerBool) {
            this.emit('buy-trigger');
        }
        const sellTriggerBool = this.sellTrigger();
        if (sellTriggerBool) {
            this.emit('sell-trigger');
        }
    }

    // TODO get historical data from exchanges
    setHistoricalData(array) {
        this._tracker.historicalDataArray = array;
    }

    setTrackerArray(array) {
        array.forEach((indicator) => {
            indicator.setTracker(this._tracker);
        });
    }

    setTrackerTA() {
        this.setTrackerArray(this._taBuyArray);
        this.setTrackerArray(this._taSellArray);
    }

    buyTrigger() {
        return this.checkTrigger(this._taBuyArray);
    }

    sellTrigger() {
        return this.checkTrigger(this._taSellArray);
    }
    checkTrigger(array) {
        // check if every indicator returns true
        return array.every((indicator) => indicator.trigger());
    }
};
