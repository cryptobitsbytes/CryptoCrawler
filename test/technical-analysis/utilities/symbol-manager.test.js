const findFilePath = global.helpers.findFilePath;
const expect = global.helpers.expect;
const SymbolManager = require(findFilePath(__filename));

describe('the SymbolManager class', () => {
    const TA = {
        setTracker: function() {},
        trigger: () => {},
    };

    const SellTA = {
        setTracker: function() {},
        trigger: () => {},
    };

    const ticker = {
        TimeStamp: Date.now(),
    }
    it('should correctly set it\'s symbol', () => {
        const symbolManager = new SymbolManager('BTCUSD', [], []);

        expect(symbolManager.symbol).to.equal('BTCUSD');
    });

    it('should correctly set the tracker for the TA classes', () => {
        const TAMock = global.sandbox.mock(TA);
        const SellTAMock = global.sandbox.mock(SellTA);
        TAMock.expects('setTracker').twice();
        SellTAMock.expects('setTracker').once();

        new SymbolManager('BTCUSD', [TA, TA], [SellTA]);
    });

    it('should correctly trigger a buy trigger', () => {
        const spy = global.sandbox.spy();
        const triggerStub = global.sandbox.stub(TA, 'trigger').callsFake(() => {
            return true;
        });

        const symbolManager = new SymbolManager('BTCUSD', [TA, TA], [SellTA]);
        symbolManager.onTicker(ticker);
        symbolManager.on('buy-trigger', spy);
        triggerStub.calledTwice;
        spy.calledOnce;
    });

    it('should correctly trigger a sell trigger', () => {
        const spy = global.sandbox.spy();
        const triggerStub = global.sandbox.stub(SellTA, 'trigger').callsFake(() => {
            return true;
        });

        const symbolManager = new SymbolManager('BTCUSD', [TA, TA], [SellTA]);
        symbolManager.onTicker(ticker);
        symbolManager.on('sell-trigger', spy);
        triggerStub.calledOnce;
        spy.calledOnce;
    });
});
