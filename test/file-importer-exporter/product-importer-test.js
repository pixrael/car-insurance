const assert = require('assert');

const { importProductsFromJSON } = require('../../utils/file-importer-exporter/product-importer');
const { Product } = require('../../utils/product');

const products2daysRecord = require('../../assets/products_after_2_days.json');

describe('Product importer |', function () {
    describe('Should return products from an array - ', function () {        

        it('should return a list valid products', function () {

            const dirtyProductData =
                [{
                    name: "",
                    sellIn: "",
                    price: ""
                },
                {
                    name: "name",
                    sellIn: "sellIn",
                    price: "price"
                },
                {
                    name: "",
                    sellIn: "",
                    price: ""
                },
                {
                    name: "Medium Coverage",
                    sellIn: "10",
                    price: "20"
                },
                {
                    name: "Full Coverage",
                    sellIn: "2",
                    price: "0"
                }];

            const products = importProductsFromJSON(dirtyProductData);

            const expectedProducts = [
                new Product('Medium Coverage', '10', '20'),
                new Product('Full Coverage', '2', '0')
            ];

            assert.deepStrictEqual(products, expectedProducts);

        });

        it('should return a list valid products from a json file', function () {

            const records = importProductsFromJSON(products2daysRecord);

            const expectedProducts = [
                new Product('Medium Coverage', '10', '20'),
                new Product('Full Coverage', '2', '0'),
                new Product('Medium Coverage', '9', '19'),
                new Product('Full Coverage', '1', '1'),
                new Product('Medium Coverage', '8', '18'),
                new Product('Full Coverage', '0', '2')
            ];

            assert.deepStrictEqual(records, expectedProducts);
        });
        

    });

});