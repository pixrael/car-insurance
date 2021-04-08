const assert = require('assert');
const { Product } = require('../utils/product');
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

describe('Product Insurance | ', function () {
    describe('CarInsurance.updatePrice - ', function () {

        it('should reduce the number of days (sellIn) every time the update function is called', function () {

            const carInsurance = new CarInsurance([new Product('Medium Coverage', 10, 20)]);
            const updatedProducts = carInsurance.updatePrice();


            assert.strictEqual(updatedProducts[0].sellIn, 9);

        });

        

        it('should reduce to the half of the price when the product expires, sellIn === 0', function () {

            const carInsurance = new CarInsurance([new Product('Medium Coverage', 10, 20)]);

            let updatedProducts;
            let i = 0;
            let days = 0;
            const totalDays = 9;
            while (i < totalDays) {
                updatedProducts = carInsurance.updatePrice();
                i++;
                days++;
                assert.strictEqual(updatedProducts[0].sellIn, 10 - days);
                assert.strictEqual(updatedProducts[0].price, 20);
            }

            updatedProducts = carInsurance.updatePrice();


            assert.strictEqual(updatedProducts[0].sellIn, 0);
            assert.strictEqual(updatedProducts[0].price, 10);

        });


    });
});