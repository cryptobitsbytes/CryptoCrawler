const findFilePath = global.helpers.findFilePath;
const expect = global.helpers.expect;
const ArrayHelpers = require(findFilePath(__filename));

describe('the ArrayHelpers class', () => {
    // only lastPrice is used by array helpers
    const high = 10.1;
    const low = 9.9;
    const testArray = [
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

    it('should correctly calculate the high point of a ticker array', () => {
        const result = ArrayHelpers.high(testArray);
        expect(result).to.equal(high);
    });

    it('should correctly calculate the low point of a ticker array', () => {
        const result = ArrayHelpers.low(testArray);
        expect(result).to.equal(low);
    });

    it('should correctly calculate the sum of the high point and low point of a ticker array', () => {
        const result = ArrayHelpers.sumHighLow(testArray);
        expect(result).to.equal(high + low);
    });
});
