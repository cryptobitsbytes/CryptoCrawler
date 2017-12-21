import events from 'events';
import SymbolManager from '../technical-analysis/utilities/symbol-manager';
import Ichimoku from '../technical-analysis/ichimoku';

export default class Bot extends events.EventEmitter {
    constructor() {
        super();
        this.hashMap = new Map();
        // mocking ta indicators
        const options = {
                tenkanPeriod: 12,
                kijunPeriod: 24,
                senkouPeriod: 12,
        };
        const ichimoku = new Ichimoku(undefined, options);
        this._taArray = [ichimoku];
        // can remove in between comments later on
    }

    onTicker(ticker) {
        const manager = this.hashMap.get(ticker.Symbol);
        if (manager !== undefined) {
            manager.onTicker(ticker);
        } else {
            const newManager = new SymbolManager(ticker.Symbol, this._taArray, []);
            this.hashMap.set(ticker.Symbol, newManager);
            newManager.on('buy-trigger', this.onBuyTrigger);
            newManager.on('sell-trigger', this.onSellTrigger);
            newManager.onTicker(ticker);
        }
    }

    onBuyTrigger() {
        // stub
        console.log('BUY!');
    }

    onSellTrigger() {
        // stub
        console.log('BUY!');
    }
}
