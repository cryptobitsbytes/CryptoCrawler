module.exports = class PoloniexApi {
    constructor(poloniex) {
        this.poloniex = poloniex;
    }

    generateCurrencyPair(currencyOne, currencyTwo) {
        return `${currencyOne}_${currencyTwo}`;
    }

    async chartData(currencyOne, currencyTwo, period, start, end) {
        if (end === undefined) {
            end = 9999999999;
        }

       const correctPeriod = [300, 900, 1800, 7200, 14400, 86400];

       if (!correctPeriod.includes(period)) {
          throw new Error('Incorrect period specified for poloniex api');
       }
       const currencyPair = this.generateCurrencyPair(currencyOne, currencyTwo);

       return await new Promise((resolve, reject) => {
            this.poloniex.returnChartData(currencyPair, period, start, end, (err, chart) => { // eslint-disable-line
                if (err) {
                    reject(err);
                }

                resolve(chart);
            });
        });
    }
};
