// import Tracker from './utilities/track-high-low';
const TechnicalIndicator = require('./base/technical-indicator');
const ArrayHelpers = require('./utilities/array-helpers');

module.exports = class Ichimoku extends TechnicalIndicator {
    constructor(tracker, options) {
        super(tracker);
        if (options === undefined) {
            this._options = {
                tenkanPeriod: 9,
                kijunPeriod: 26,
                senkouPeriod: 52,
            };
        } else {
          this._options = options;
        }
    }

    tenkan() {
        const period = this.options.tenkanPeriod;
        const periodData = this._tracker.returnPeriodData(period);
        const sumHighLow = ArrayHelpers.sumHighLow(periodData);
        return (sumHighLow) / 2;
    }

    kijun() {
        const period = this.options.kijunPeriod;
        const periodData = this._tracker.returnPeriodData(period);
        const sumHighLow = ArrayHelpers.sumHighLow(periodData);
        return (sumHighLow) / 2;
    }

    senkouSpanA() {
        return (tenkan() + kijun()) / 2;
    }

    senkouSpanB() {
        const period = this.options.senkouPeriod;
        const periodData = this._tracker.returnPeriodData(period);
        const sumHighLow = ArrayHelpers.sumHighLow(periodData);
        return (sumHighLow) / 2;
    }

    upward() {
        return this.senkouSpanA() > this.senkouSpanB();
    }

    downward() {
        return this.senkouSpanB() > this.senkouSpanA();
    }

    trigger() {
        // check if caching of certain values is possible, this calculates twice
        // not really efficient
        const x = this._tracker.latest();
        if (this.upward()) {
            return this.senkouSpanB <= x;
        } else {
            return this.senkouSpanA <= x;
        }
    }
};
