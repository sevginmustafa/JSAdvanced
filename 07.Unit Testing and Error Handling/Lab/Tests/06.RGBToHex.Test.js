const { assert } = require('chai');
const { rgbToHexColor } = require('./06.RGBToHex');

describe('RGB To Hex', () => {
    it('returns correct color if input is valid', () => {
        assert.equal(rgbToHexColor(5, 5, 5), '#050505');
        assert.equal(rgbToHexColor(0, 5, 255), '#0005FF');
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });

    it('returns undefined if one or more of the inputs are missing', () => {
        assert.equal(rgbToHexColor(255, 255), undefined);
        assert.equal(rgbToHexColor(255), undefined);
        assert.equal(rgbToHexColor(), undefined);
    });

    it('returns undefined if one of the inputs is not an integer', () => {
        assert.equal(rgbToHexColor(255, 255, '255'), undefined);
        assert.equal(rgbToHexColor(255, '255', 255), undefined);
        assert.equal(rgbToHexColor('255', 255, 255), undefined);
    });

    it('returns undefined if one of the inputs is out of range', () => {
        assert.equal(rgbToHexColor(265, 255, 255), undefined);
        assert.equal(rgbToHexColor(255, 256, 255), undefined);
        assert.equal(rgbToHexColor(255, 255, 258), undefined);
        assert.equal(rgbToHexColor(-1, 255, 255), undefined);
        assert.equal(rgbToHexColor(255, -6, 255), undefined);
        assert.equal(rgbToHexColor(255, 255, -666), undefined);
    });
})