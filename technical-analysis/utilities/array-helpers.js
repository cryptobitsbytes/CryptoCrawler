module.exports = class ArrayHelpers {
    /**
     * high returns the highest lastPrice of a ticker array
     * @param {Array} array - Array[Object]
     * @param {property} property - Property of the object to filter on
     * @return {float} - highest last price in array
     */
    static high(array, property) {
        return array.reduce((prev, current) => {
            return (prev[property] > current[property]) ? prev : current;
        }).lastPrice;
    }

    /**
     * high returns the lowest lastPrice of a ticker array
     * @param {Array} array - Array[Object]
     * @param {property} property - Property of the object to filter on
     * @return {float} - lowest last price in array
     */
    static low(array, property) {
        return array.reduce((prev, current) => {
            return (prev[property] < current[property]) ? prev : current;
        }).lastPrice;
    }

    /**
     * sumHighLow returns the sum of the lowest and highest
     * lastPrice of a ticker array
     * @param {Array} array - Array[Ticker]
     * @param {property} highProperty - Property of the object to filter on
     * @param {property} lowProperty - Property of the object to filter on 
     * @return {float} - lowest last price in array
     */
    static sumHighLow(array, highProperty, lowProperty) {
        return this.high(array, highProperty) + this.low(array, lowProperty);
    }
};
