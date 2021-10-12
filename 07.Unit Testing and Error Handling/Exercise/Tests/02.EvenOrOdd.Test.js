const { assert, expect } = require('chai');
const { isOddOrEven } = require('./02.EvenOrOdd');

describe('Even Or Odd', () => {
    it('works correctly only with input string', () => {
        expect(isOddOrEven('string')).to.equal('even');
    });

    it('returns correct result if input is of type string', () => {
        expect(isOddOrEven('')).to.equal('even');
        expect(isOddOrEven('str')).to.equal('odd');
    });

    it('returns undefined if input is not string', () => {
        expect(isOddOrEven(5)).to.equal(undefined);
    });
});