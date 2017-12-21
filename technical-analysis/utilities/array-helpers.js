module.exports = class ArrayHelpers {
    static high(array) {
        return array.reduce((prev, current) => {
            return (prev.lastPrice > current.lastPrice) ? prev : current;
        });
    }

    static low(array) {
        return array.reduce((prev, current) => {
            return (prev.lastPrice < current.lastPrice) ? prev : current;
        });
    }

    static sumHighLow(array) {
        return this.high(array) + this.low(array);
    }
}
