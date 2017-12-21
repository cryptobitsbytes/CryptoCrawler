module.exports = class Tracker {
    get tickerArray() {
        return this._tickerArray;
    }

    constructor() {
        this._tickerArray = [];
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

        const index = this._tickerArray.findIndex((ticker) => {
            return ticker.Timestamp >= ago;
        });

        return this._tickerArray.slice(index);
    }

    latest() {
        return this._tickerArray.slice(-1).pop();
    }

    insert(ticker) {
        this._tickerArray.push(ticker);
    }
};

