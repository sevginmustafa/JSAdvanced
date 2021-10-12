const { assert, expect } = require('chai');
const { createCalculator } = require('./07.AddSubtract');

describe('Add / Subtract', () => {

    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('contains three functions as properties', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('add function returns correct num', () => {
        instance.add(6);
        expect(instance.get()).to.equal(6);
    });    
    
    it('subtract function returns correct num', () => {
        instance.subtract(6);
        expect(instance.get()).to.equal(-6);
    });
    
    it('parameter can be parsed correctly', () => {
        instance.subtract('6');
        expect(instance.get()).to.equal(-6);
    });  
    
    it('add and subtract functions work correctly when used together', () => {
        instance.subtract(6);
        instance.add(7);
        expect(instance.get()).to.equal(1);
    });  
    
    it('add and subtract functions work correctly when used together with parsed values', () => {
        instance.subtract('6');
        instance.add('7');
        expect(instance.get()).to.equal(1);
    });  
});