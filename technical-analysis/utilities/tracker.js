/**
 * Tracker = 
 */
export default class Tracker {
    constructor(array, period) {
        this.array = array;
        this.period = period;
    }

    removeOld() {
        array.filter((ticker) => {
            ticker.Timestamp > new Date(Date.now - this.period);
        });
    }

    high() {
        return Math.max(this.array);
    }

    low() {
        return Math.min(this.array);
    }

    sumHighLow() {
        return this.high() + this.low();
    }
}
