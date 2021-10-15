const { assert, expect } = require('chai');
const { StringBuilder } = require('./13.StringBuilder');

describe('String Builder', () => {
    let instance = null;
    let instance2 = null;

    beforeEach(() => {
        instance = new StringBuilder('hello');
        instance2 = new StringBuilder();
    })

    it('can be instantiated with a string argument or without anything', () => {
        expect(instance._stringArray).to.deep.equal(Array.from('hello'));
        expect(instance2._stringArray).to.deep.equal([]);
    })

    it('should throw error if argument is not of type string', () => {
        expect(() => new StringBuilder(5)).to.throw(Error, 'Argument must be a string');
    })

    it('method append converts the given string into array and add it to the end of the array', () => {
        instance.append(' ');
        expect(instance._stringArray).to.deep.equal(Array.from('hello '));
    })

    it('method should throws error if argument is not of type string', () => {
        expect(() => instance.append(5)).to.throw(Error, 'Argument must be a string');
    })

    it('method prepend converts the given string into array and add it to the start of the array', () => {
        instance.prepend(' ');
        expect(instance._stringArray).to.deep.equal(Array.from(' hello'));
    })

    it('method prepend throws error if argument is not of type string', () => {
        expect(() => instance.prepend(5)).to.throw(Error, 'Argument must be a string');
    })

    it('method insertAt converts the given string into array and inserts it to the given index', () => {
        instance.insertAt(' Pesho', 5);
        expect(instance._stringArray).to.deep.equal(Array.from('hello Pesho'));
    })

    it('method insertAt throws error if argument is not of type string', () => {
        expect(() => instance.insertAt(5, 0)).to.throw(Error, 'Argument must be a string');
    })

    it('method remove deletes given number of elements from the array starting from the given index', () => {
        instance.remove(0, 3);
        expect(instance._stringArray).to.deep.equal(Array.from('lo'));
    })

    it('method toString returns a string with all elements joined by an empty string', () => {
        expect(instance.toString()).to.equal('hello');
        expect(instance2.toString()).to.equal('');
    })
})