const findFilePath = global.helpers.findFilePath;
const expect = global.helpers.expect;
const ArrayHelpers = require(findFilePath(__filename));

describe('the ArrayHelpers class', () => {
    // only lastPrice is used by array helpers
    const high = 10.1;
    const low = 9.9;
    const testArrayHappyFlow = [
        {
            lastPrice: 10.0,
        },
        {
            lastPrice: high,
        },
        {
            lastPrice: 10.0,
        },
        {
            lastPrice: low,
        },
    ];

    const testArrayDouble = [
        {
            lastPrice: high,
        },
        {
            lastPrice: high,
        },
        {
            lastPrice: 10.0,
        },
        {
            lastPrice: low,
        },
        {
            lastPrice: low,
        },
    ];

    it('should correctly calculate the high point of a ticker array', () => {
        const result = ArrayHelpers.high(testArrayHappyFlow, 'lastPrice');
        expect(result).to.equal(high);
    });

    it('should correctly calculate the low point of a ticker array', () => {
        const result = ArrayHelpers.low(testArrayHappyFlow, 'lastPrice');
        expect(result).to.equal(low);
    });

    it('should correctly calculate the sum of the high point and low point of a ticker array', () => {
        const result = ArrayHelpers.sumHighLow(testArrayHappyFlow, 'lastPrice', 'lastPrice');
        expect(result).to.equal(high + low);
    });

    it('should correctly calculate both points of a ticker array when there are doubles', () => {
        const resulthigh = ArrayHelpers.high(testArrayDouble, 'lastPrice');
        const resultlow = ArrayHelpers.low(testArrayDouble, 'lastPrice');
        expect(resulthigh).to.equal(high);
        expect(resultlow).to.equal(low);
    });

    /* FIXME: Misschien wat testen toevoegen voor errorhandling bijv:

    const testArrayEmpty = [];

    it('should throw an exception when the array is empty', () => {
        expect(function() {
            ArrayHelpers.sumHighLow(testArrayEmpty);
        }).to.throw(SomeException);
    });
    */
});
