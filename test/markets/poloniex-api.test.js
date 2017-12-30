const findFilePath = global.helpers.findFilePath;
const expect = global.helpers.expect;
const PoloniexApi = require(findFilePath(__filename));

const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();

describe('the PoloniexApi class', () => {
    it('should correctly create a coin pair for poloniex', () => {
        const poloniexApi = new PoloniexApi(poloniex);
        const btcUsdt = poloniexApi.generateCurrencyPair('BTC', 'USDT');

        expect(btcUsdt).to.equal('BTC_USDT');
    });

    it('should throw an error when an incorrect period is specified', (done) => {
        const poloniexApi = new PoloniexApi(poloniex);
        poloniexApi.chartData('BTC', 'USDT', 333, 0, 9999999999).catch((e) => {
            expect(e).to.be.an.instanceOf(Error).with.property('message', 'Incorrect period specified for poloniex api');
            done();
        });
    });

    it('should correctly call the poloniex-api', () => {
        const returnChartDataStub = global.sandbox.stub(poloniex, 'returnChartData')
        .callsFake((currencyPair, period, start, end, cb) => {
            console.log(currencyPair);
            cb(null, null);
        });

        const poloniexApi = new PoloniexApi(poloniex);
        poloniexApi.chartData('BTC', 'USDT', 300, 0, 9999999999);

        expect(returnChartDataStub.calledWith('BTC_USDT', 300, 0, 9999999999)).to.equal(true);
    });
});
