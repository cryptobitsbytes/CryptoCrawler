import Tracker from './utilities/track-high-low';

export default class Ichimoku {
    constructor(array, options) {
        this.array = array;
        if (options !== undefined) {
            // initialize with default values
            this.tenkanTracker = new Tracker(array, 9);
            this.kijunTracker = new Tracker(array, 26);
            this.senkouSpanBTracker = new Tracker(array, 52);
        } else {
            // use options object to construct custom periods
            this.tenkanTracker = new Tracker(array, options.tenkanPeriod);
            this.kijunTracker = new Tracker(array, options.kijunPeriod);
            this.senkouSpanBTracker = new Tracker(array, options.senkouPeriod);
        }
    }

    tenkan() {
        return (this.tenkanTracker.sumHighLow()) / 2;
    }

    kijun() {
        return (this.kijunTracker.sumHighLow()) / 2;
    }

    senkouSpanA() {
        return (tenkan() + kijun()) / 2;
    }

    senkouSpanB() {
        return (this.senkouSpanBTracker.sumHighLow()) / 2;
    }

    upward() {
        return this.senkouSpanA() > this.senkouSpanB();
    }

    downward() {
        return this.senkouSpanB > this.senkouSpanA();
    }

    valueThroughCloud(x) {
        if (this.upward()) {
            return this.senkouSpanB <= x;
        } else {
            return this.senkouSpanA <= x;
        }
    }
}
