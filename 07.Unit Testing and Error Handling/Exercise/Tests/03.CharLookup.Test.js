const { assert, expect } = require('chai');
const { lookupChar } = require('./03.CharLookup');

describe('Char Lookup', () => {
    it('input params should be of type string and int', () => {
        expect(lookupChar('string', 0)).to.equal('s');
        expect(lookupChar('string', 2)).to.equal('r');
        expect(lookupChar('string', 5)).to.equal('g');
    });

    it('should return undefined if input types are not correct', () => {
        expect(lookupChar(6, 0)).to.equal(undefined);
        expect(lookupChar('string', '5')).to.equal(undefined);
        expect(lookupChar('string', 5.5)).to.equal(undefined);
        expect(lookupChar(5, '5')).to.equal(undefined);
    }); 
    
    it('should return "incorect index" if given int is out of range', () => {
        expect(lookupChar('string', 10)).to.equal('Incorrect index');
        expect(lookupChar('string', -10)).to.equal('Incorrect index');
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
        expect(lookupChar('string', 6)).to.equal('Incorrect index');
    });
});