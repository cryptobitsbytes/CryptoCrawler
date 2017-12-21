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
        this._tickerArray = array.filter((ticker) => {
            ticker.Timestamp > new Date(Date.now().getDate() - this.period);
        });
    }

    returnPeriodData(period) {
        const index = this._tickerArray.findIndex((ticker) => {
            ticker.Timestamp > new Date(Date.now - this.period);
        });
        return this._tickerArray.slice(index);
    }

    latest() {
        return this._tickerArray.slice(-1).pop();
    }

    insert() {
        this._tickerArray.push(ticker);
    }
}
