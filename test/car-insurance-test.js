const assert = require('assert');
const { Product } = require('../utils/product');
const { CarInsurance } = require('../utils/car-insurance');
const { importProductsFromJSON, importProductsFromJSONFilterByNameProduct } = require('../utils/helpers.js/product-importer');

const productsAfter30Days = require('../assets/products_after_30_days.json');
const productsAfter5Days = require('../assets/products_after_5_days.json');


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

        it('should get the values correct values for a product after 2 days ', function () {
            const initialProducts = [new Product('Medium Coverage', 10, 20)];
            const carInsurance = new CarInsurance(initialProducts);

            const updatedProductsAtDay1 = new Product('Medium Coverage', 9, 19);
            const updatedProductsAtDay2 = new Product('Medium Coverage', 8, 18);


            let updatedProducts = carInsurance.updatePrice();
            assert.deepStrictEqual(updatedProducts, [updatedProductsAtDay1]);


            updatedProducts = carInsurance.updatePrice();
            assert.deepStrictEqual(updatedProducts, [updatedProductsAtDay2]);
        });

    });
});


describe('Product Insurance | ', function () {
    describe('CarInsurance.updatePrice - ', function () {

        it('should get the values for Medium coverage product after 30 days', function () {

            const initialProducts = [new Product('Medium Coverage', 10, 20)];

            const carInsurance = new CarInsurance(initialProducts);

            const nProductsPerDay = initialProducts.length;

            const productsAfter30D = importProductsFromJSONFilterByNameProduct(productsAfter30Days, 'Medium Coverage');

            const totalDays = productsAfter30D.length / nProductsPerDay;


            for (let day = 1; day < totalDays; day++) {

                const expectedProductValues = productsAfter30D.slice(day * nProductsPerDay, day * nProductsPerDay + nProductsPerDay);

                let updatedProducts = carInsurance.updatePrice();

                assert.deepStrictEqual(updatedProducts, expectedProductValues);
            }
        });

        it('should get the values for Full Coverage product after 30 days', function () {

            const initialProducts = [new Product('Full Coverage', 2, 0)];

            const carInsurance = new CarInsurance(initialProducts);

            const nProductsPerDay = initialProducts.length;

            const productsAfter30D = importProductsFromJSONFilterByNameProduct(productsAfter30Days, 'Full Coverage');

            const totalDays = productsAfter30D.length / nProductsPerDay;


            for (let day = 1; day < totalDays; day++) {

                const expectedProductValues = productsAfter30D.slice(day * nProductsPerDay, day * nProductsPerDay + nProductsPerDay);

                let updatedProducts = carInsurance.updatePrice();
                assert.deepStrictEqual(updatedProducts, expectedProductValues);
            }

        });


        it('should get the values for Low Coverage product after 30 days', function () {

            const initialProducts = [new Product('Low Coverage', 5, 7)];

            const carInsurance = new CarInsurance(initialProducts);

            const nProductsPerDay = initialProducts.length;

            const productsAfter30D = importProductsFromJSONFilterByNameProduct(productsAfter30Days, 'Low Coverage');


            const totalDays = productsAfter30D.length / nProductsPerDay;


            for (let day = 1; day < totalDays; day++) {

                const expectedProductValues = productsAfter30D.slice(day * nProductsPerDay, day * nProductsPerDay + nProductsPerDay);

                let updatedProducts = carInsurance.updatePrice();

                assert.deepStrictEqual(updatedProducts, expectedProductValues);
            }


        });

        it('should get the values of products after 30 days', function () {

            const initialProducts = [
                new Product('Medium Coverage', 10, 20),
                new Product('Full Coverage', 2, 0),
                new Product('Low Coverage', 5, 7),
                new Product('Mega Coverage', 0, 80),
                new Product('Mega Coverage', -1, 80),
                new Product('Special Full Coverage', 15, 20),
                new Product('Special Full Coverage', 10, 49),
                new Product('Special Full Coverage', 5, 49),
                new Product('Super Sale', 3, 6)];
            const carInsurance = new CarInsurance(initialProducts);

            const nProductsPerDay = initialProducts.length;

            const productsAfter30D = importProductsFromJSON(productsAfter30Days, 'Mega Coverage');

            
            const totalDays = productsAfter30D.length / nProductsPerDay;
            

            for (let day = 1; day < totalDays; day++) {

                const expectedProductValues = productsAfter30D.slice(day * nProductsPerDay, day * nProductsPerDay + nProductsPerDay);

                let updatedProducts = carInsurance.updatePrice();

                assert.deepStrictEqual(updatedProducts, expectedProductValues);
            }

        });

    });
});