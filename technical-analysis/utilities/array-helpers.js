module.exports = class ArrayHelpers {
    /** 
     * high returns the highest lastPrice of a ticker array
     * @param {Array} array - Array[Ticker]
     * @return {float} - highest last price in array
     */
    static high(array) {
        return array.reduce((prev, current) => {
            return (prev.lastPrice > current.lastPrice) ? prev : current;
        }).lastPrice;
    }

    /** 
     * high returns the lowest lastPrice of a ticker array
     * @param {Array} array - Array[Ticker]
     * @return {float} - lowest last price in array
     */
    static low(array) {
        return array.reduce((prev, current) => {
            return (prev.lastPrice < current.lastPrice) ? prev : current;
        }).lastPrice;
    }

    /** 
     * high returns the sum of the lowest and highest lastPrice of a ticker array
     * @param {Array} array - Array[Ticker]
     * @return {float} - lowest last price in array
     */
    static sumHighLow(array) {
        return this.high(array) + this.low(array);
    }
};
