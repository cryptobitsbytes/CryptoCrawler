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
    };

    it('should correctly set it\'s symbol', () => {
        const symbolManager = new SymbolManager('BTCUSD', [], []);

        expect(symbolManager.symbol).to.equal('BTCUSD');
    });

    // Onduidelijk wat dit test, mogelijk false negative
    it('should correctly set the tracker for the TA classes', () => {
        const TAMock = global.sandbox.mock(TA);
        const SellTAMock = global.sandbox.mock(SellTA);

        // wat assert je hier? als ik twice of once verander slaagt
        // de test nog steeds
        TAMock.expects('setTracker').twice();
        SellTAMock.expects('setTracker').once();

        // Wat voegt dit toe? test slaag nog steeds zonder deze regel
        new SymbolManager('BTCUSD', [TA, TA], [SellTA]);
    });

    // Lijkt niet uit te maken wat ik aanpas in de test, blijft slagen:
    // return naar false,
    // wijziging van parameters SymbolManager,
    // de calledtwice/once veranderen
    //
    // Klopt het dat in beide testen [SellTA] gebruikt moet worden?
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
