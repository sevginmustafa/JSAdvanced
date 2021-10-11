const { assert } = require('chai');
const { sum } = require('./04.SumOfNumbers');

describe('Sum Of Numbers', () => {
    it('works only with array', () => {
        assert.throws(() => sum(5), Error);
    });

    it('works with single num', () => {
        assert.equal(sum([5]), 5);
    });

    it('works with multiple nums', () => {
        assert.equal(sum([5, 1]), 6);
    });
})