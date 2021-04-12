const assert = require('assert');
const fs = require('fs');

const { formatToRawString, formatToJson } = require('../../utils/helpers/product-formatter');

const { Product } = require('../../utils/product');

const rawString2Products2Days = fs.readFileSync('./assets/results/raw_string_2_products_2days.txt').toString();

const rawString2Products2DaysJSON = require('../../assets/results/raw_string_2_products_2days.json');

describe('Products result formater |', function () {
    describe('Should return a raw string with the results of the state of the products in the days - ', function () {
        it('should return an string with the states of the products ', function () {

            const productsDayZero = [
                new Product('Medium Coverage', 10, 20),
                new Product('Full Coverage', 2, 0),
            ];

            const productStatesInDays = [
                new Product('Medium Coverage', 9, 19),
                new Product('Full Coverage', 1, 1),
                new Product('Medium Coverage', 8, 18),
                new Product('Full Coverage', 0, 2)
            ];

            const result = formatToRawString(productsDayZero, productStatesInDays);

            assert.strictEqual(result.trim(), rawString2Products2Days.trim());
        });
    });

    describe('Should return a json with the products - ', function () {
        it('should return an string with the states of the products ', function () {

            const productsDayZero = [
                new Product('Medium Coverage', 10, 20),
                new Product('Full Coverage', 2, 0),
            ];

            const productStatesInDays = [
                new Product('Medium Coverage', 9, 19),
                new Product('Full Coverage', 1, 1),
                new Product('Medium Coverage', 8, 18),
                new Product('Full Coverage', 0, 2)
            ];

            const result = formatToJson(productsDayZero, productStatesInDays);

            assert.deepStrictEqual(JSON.parse(result), rawString2Products2DaysJSON);
        });
    });

});