const findFilePath = global.helpers.findFilePath;
const expect = global.helpers.expect;
const Tracker = require(findFilePath(__filename));

const setDatePeriodAgo = (period) => {
    const ago = new Date(Date.now());
    ago.setDate(ago.getDate() - period);
    return ago;
};

const constructTestDate = () => {
    const now = new Date(Date.now());
    const period = 9;
    const periodDaysAgo = setDatePeriodAgo(period);
    const toOld = setDatePeriodAgo(period + 1);
    const tickerArray = [
        {
            Timestamp: now,
        },
        {
            Timestamp: now,
        },
        {
            Timestamp: periodDaysAgo,
        },
        {
            Timestamp: toOld,
        },
    ];
    return {
        now,
        period,
        periodDaysAgo,
        tickerArray,
    };
};

describe('the Tracker class', () => {
    it('should correctly store new tickers', () => {
        const tracker = new Tracker();
        const testDate = constructTestDate();
        const testPoint = testDate.tickerArray[0];
        tracker.insert(testPoint);
        expect(tracker.tickerArray.length).to.equal(1);
        expect(tracker.tickerArray[0]).to.equal(testPoint);
    });

    it('should correctly return the latest ticker', () => {
        const tracker = new Tracker();
        const testDate = constructTestDate();
        const testPointOne = testDate.tickerArray[0];
        const testPointTwo = testDate.tickerArray[1];
        tracker.insert(testPointOne);
        tracker.insert(testPointTwo);
        expect(tracker.latest()).to.equal(testPointTwo);
    });

    it('should correctly return the array filtered by a period', () => {
        const tracker = new Tracker();
        const testDate = constructTestDate();
        testDate.tickerArray.reverse().forEach((ticker) => {
            tracker.insert(ticker);
        });
        const filteredArray = tracker.returnPeriodData(testDate.period);
        expect(filteredArray.length).to.equal(3);
        const isAllAbovePeriod = filteredArray.every((ticker) => {
            return ticker.Timestamp >= testDate.periodDaysAgo;
        });
        expect(isAllAbovePeriod).to.equal(true);
    });
});
