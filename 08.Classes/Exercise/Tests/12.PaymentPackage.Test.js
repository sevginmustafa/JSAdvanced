const { assert, expect } = require('chai');
const { PaymentPackage } = require('./12.PaymentPackage');

describe('Payment Package', () => {
    let instance = null;
    let instance2 = null;
    let instance3 = null;

    beforeEach(() => {
        instance = new PaymentPackage('Consultation', 800);
        instance2 = new PaymentPackage('HR Services', 0);
        instance3 = new PaymentPackage('Partnership Fee', 5.5);
    });

    it('can be instantiated with two parameters of type string and number', () => {
        expect(instance.name).to.equal('Consultation');
        expect(instance.value).to.equal(800);
        expect(instance.VAT).to.equal(20);
        expect(instance.active).to.equal(true);

        expect(instance2.name).to.equal('HR Services');
        expect(instance2.value).to.equal(0);
        
        expect(instance3.name).to.equal('Partnership Fee');
        expect(instance3.value).to.equal(5.5);
    })

    it('throws error if one or more of parameters are missing', () => {
        expect(() => new PaymentPackage('Consultation')).to.throw(Error);
        expect(() => new PaymentPackage(800)).to.throw(Error);
        expect(() => new PaymentPackage()).to.throw(Error);
    })

    it('throws error if one or more of parameters types are not correct', () => {
        expect(() => new PaymentPackage('Consultation', '800')).to.throw(Error);
        expect(() => new PaymentPackage(800, 800)).to.throw(Error);
    })

    it('throws error if name parameter is empty string', () => {
        expect(() => new PaymentPackage('', 800)).to.throw(Error);
    })

    it('throws error if value parameter is negative', () => {
        expect(() => new PaymentPackage('Consultation', -800)).to.throw(Error);
    })

    it('name property should change if setted value is of type string', () => {
        instance.name = 'HR Services';

        expect(instance.name).to.equal('HR Services');
    })

    it('name property should throw error if setted value is not of type string or is empty', () => {
        expect(() => instance.name = 800).to.throw(Error);
        expect(() => instance.name = '').to.throw(Error);
    })

    it('value property should change if setted value is of type number', () => {
        instance.value = 600;
        expect(instance.value).to.equal(600);

        instance.value = 700.5;
        expect(instance.value).to.equal(700.5);
    })

    it('value property should throw error if setted value is not of type number or is negative', () => {
        expect(() => instance.value = 'HR Services').to.throw(Error);
        expect(() => instance.value = -800).to.throw(Error);
    })

    it('VAT property should change if setted value is of type number', () => {
        instance.VAT = 30;
        expect(instance.VAT).to.equal(30);

        instance.VAT = 30.5;
        expect(instance.VAT).to.equal(30.5);
    })

    it('VAT property should throw error if setted value is not of type number or is negative', () => {
        expect(() => instance.VAT = 'HR Services').to.throw(Error);
        expect(() => instance.VAT = -20).to.throw(Error);
    })

    it('active property should change if setted value is of type bool', () => {
        instance.active = false;
        expect(instance.active).to.equal(false);
    })

    it('VAT property should throw error if setted value is not of type bool', () => {
        expect(() => instance.active = 'HR Services').to.throw(Error);
        expect(() => instance.active = -20).to.throw(Error);
        expect(() => instance.active = 50.4).to.throw(Error);
    })

    it('method toString should work properly', () => {
        expect(instance.toString()).to.equal('Package: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960');

        instance.active = false;
        expect(instance.toString()).to.equal('Package: Consultation (inactive)\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960');
    })
})