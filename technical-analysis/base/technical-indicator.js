// essentially an abstract class for technical indicators
export default class TechnicalIndicator {
    constructor(tracker) {
        this._tracker = tracker;
    }

    recalculate(tracker) {
        this._tracker = tracker;
    }

    trigger() {
        throw new Error('method not implemented in TA indicator');
    }
}