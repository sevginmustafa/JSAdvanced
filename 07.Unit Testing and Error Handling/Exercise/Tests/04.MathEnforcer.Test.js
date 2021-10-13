const { assert, expect } = require('chai');
const { mathEnforcer } = require('./04.MathEnforcer');

describe('mathEnforcer', () => {
    let instance = null;

    beforeEach(() => {
        instance = mathEnforcer;
    });

    it('contains three functions as properties', () => {
        expect(instance).to.has.ownProperty('addFive');
        expect(instance).to.has.ownProperty('subtractTen');
        expect(instance).to.has.ownProperty('sum');
    });

    describe('addFive', () => {
        it('addFive should return undefined if input is not a number', () => {
            expect(instance.addFive('5')).to.equal(undefined);
            expect(instance.addFive([])).to.equal(undefined);
            expect(instance.addFive('5.5')).to.equal(undefined);
        });

        it('addFive should return the sum of the given number and 5', () => {
            expect(instance.addFive(5)).to.equal(10);
            expect(instance.addFive(5.5)).to.be.closeTo(10.5, 0.01);
            expect(instance.addFive(-4.5)).to.be.closeTo(0.5, 0.01);
            expect(instance.addFive(0)).to.equal(5);
            expect(instance.addFive(-5)).to.equal(0);
            expect(instance.addFive(-10)).to.equal(-5);
        });
    })

    describe('subtractTen', () => {
        it('subtractTen should return undefined if input is not a number', () => {
            expect(instance.subtractTen('5')).to.equal(undefined);
            expect(instance.addFive([])).to.equal(undefined);
            expect(instance.addFive('5.5')).to.equal(undefined);
        });

        it('subtractTen should return the given number after subtracting 10 from it', () => {
            expect(instance.subtractTen(5.5)).to.be.closeTo(-4.5, 0.01);
            expect(instance.subtractTen(-5.5)).to.be.closeTo(-15.5, 0.01);
            expect(instance.subtractTen(5)).to.equal(-5);
            expect(instance.subtractTen(0)).to.equal(-10);
            expect(instance.subtractTen(10)).to.equal(0);
            expect(instance.subtractTen(-10)).to.equal(-20);
        });
    })

    describe('sum', () => {
        it('sum should return undefined if any of the parameters is not a number', () => {
            expect(instance.sum('5', 5)).to.equal(undefined);
            expect(instance.sum(5, '5')).to.equal(undefined);
            expect(instance.sum('5', '5')).to.equal(undefined);
            expect(instance.addFive([], 5)).to.equal(undefined);
            expect(instance.addFive('5.5', 0)).to.equal(undefined);
            expect(instance.addFive('5.5', '-5.5')).to.equal(undefined);
        });

        it('sum should return the sum from the two parameters', () => {
            expect(instance.sum(5, 5)).to.equal(10);
            expect(instance.sum(5.5, 5)).to.be.closeTo(10.5, 0.01);
            expect(instance.sum(5.5, 5.5)).to.be.closeTo(11, 0.01);
            expect(instance.sum(-5.5, -5.5)).to.be.closeTo(-11, 0.01);
            expect(instance.sum(-5, 5)).to.equal(0);
            expect(instance.sum(-5, -5)).to.equal(-10);
        });
    })
})