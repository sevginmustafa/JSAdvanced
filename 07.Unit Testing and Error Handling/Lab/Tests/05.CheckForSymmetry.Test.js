const { assert } = require('chai');
const { isSymmetric } = require('./05.CheckForSymmetry');

describe('Check For Symmetry', () => {
    it('returns false if input is not of type array', () => {
        assert.equal(isSymmetric(5), false);
        assert.equal(isSymmetric('5'), false);
        assert.equal(isSymmetric('this is string'), false);
    });

    it('works only with input of type array', () => {
        assert.equal(isSymmetric([5, 6, 6, 5]), true);
    });

    it('returns false if array contains different types', () => {
        assert.equal(isSymmetric(['5', 6, 6, 5]), false);
    });

    it('returns false if array is not symmetic', () => {
        assert.equal(isSymmetric([5, 6, 5, 5]), false);
    });

    it('returns true if empty array is given', () => {
        assert.equal(isSymmetric([]), true);
    });
});