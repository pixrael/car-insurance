const assert = require('assert');

const { SuperSaleRule } = require('../../../utils//rules/custom-rules/super-sale-rule');

describe('Super Sale Rule |', function () {
    describe('Should crease price- ', function () {
        it('should decrease in 1 when is more than 0 days to expire', function () {

            const superSaleRule = new SuperSaleRule();

            let days = superSaleRule.calculateSellIn(5);
            assert.strictEqual(days, 4);

            let price = superSaleRule.calculatePrice(11, 20);
            assert.strictEqual(price, 19);

            price = superSaleRule.calculatePrice(15, 19);
            assert.strictEqual(price, 18);

            price = superSaleRule.calculatePrice(19, 18);
            assert.strictEqual(price, 17);
        });

        it('should decrease in 2 when is expired', function () {

            const superSaleRule = new SuperSaleRule();

            let days = superSaleRule.calculateSellIn(5);
            assert.strictEqual(days, 4);

            let price = superSaleRule.calculatePrice(0, 20);
            assert.strictEqual(price, 18);

            price = superSaleRule.calculatePrice(-1, 5);
            assert.strictEqual(price, 3);

            price = superSaleRule.calculatePrice(-5, 18);
            assert.strictEqual(price, 16);
        });





    });
});