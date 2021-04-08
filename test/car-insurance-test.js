const assert = require('assert');
const { CarInsurance } = require('../utils/car-insurance');


describe('Product Insurance |', function () {
    describe('CarInsurance.updatePrice - ', function () {
        it('should return an empty array by default', function () {

            const carInsurance = new CarInsurance();
            const updatedProducts = carInsurance.updatePrice();


            assert.ok((updatedProducts.constructor.name == "Array"));
            assert.ok((updatedProducts.length === 0));
        });
    });
});