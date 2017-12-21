import events from 'events';
import Tracker from './tracker';

export default class SymbolManager extends events.EventEmitter {
    get symbol() {
        return this._symbol;
    }

    constructor(symbol, taBuyArray, taSellArray) {
        super();
        this._symbol = symbol;
        this._tracker = new Tracker();
        this._taBuyArray = taBuyArray;
        this._taSellArray = taSellArray;
    }

    onTicker(ticker) {
        // check running time of push. 
        // If O(n) should maybe consider something else
        // since event can be emitted before new ticker data
        this._tracker.insert(ticker);
        this.recalculateTA();
        const buyTriggerBool = this.buyTrigger();
        if (buyTriggerBool) {
            this.emit('buy-trigger');
        }
        const sellTriggerBool = this.sellTrigger();
        if (sellTriggerBool) {
            this.emit('sell-trigger');
        }
    }

    recalculateTA() {
        this._taArray.forEach((indicator) => {
            indicator.recalculate(this._tracker);
        });
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
}
