// essentially an abstract class for technical indicators
module.exports = class TechnicalIndicator {
    constructor(tracker) {
        this._tracker = tracker;
    }

    setTracker(tracker) {
        this._tracker = tracker;
    }

    trigger() {
        throw new Error('method not implemented in TA indicator');
    }
};
