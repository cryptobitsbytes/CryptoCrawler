module.exports = class Tracker {
    get tickerArray() {
        return this._tickerArray;
    }

    // TODO get historical data from exchanges
    get historicalDataArray() {
        return this._historicalDataArray;
    }

    set historicalDataArray(historicalDataArray) {
       this._historicalDataArray = historicalDataArray;
    }

    constructor() {
        this._tickerArray = [];
        this._historicalDataArray = [];
    }

    // TODO use to clean up the array after certain period
    // Don't want 100 days of data in memory;
    removeOld(period) {
        const ago = new Date(Date.now());
        ago.setDate(ago.getDate() - period);
        this._tickerArray = array.filter((ticker) => ticker.Timestamp > ago);
    }

    returnPeriodData(period) {
        // set date to beginning of period ago
        const ago = new Date(Date.now());
        ago.setDate(ago.getDate() - period);
        ago.setHours(0, 0, 0, 0);

        const index = this._historicalDataArray.findIndex((ticker) => {
            return ticker.date >= ago;
        });

        return this._historicalDataArray.slice(index);
    }

    latest() {
        return this._tickerArray.slice(-1).pop();
    }

    insert(ticker) {
        this._tickerArray.push(ticker);
    }
};

