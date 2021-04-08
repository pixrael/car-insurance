const assert = require('assert');

const { FullCoverageRule } = require('../../../utils//rules/custom-rules/full-coverage-rule');

describe('Full Coverage Rule |', function () {
    describe('Should increase the price every time it is calculated - ', function () {
        it('should increase the price and decrease the days', function () {

            const fullCoverageRule = new FullCoverageRule();

            const nPendingDays = 5;
            const initialPrice = 20;

            const newNPendingDays = fullCoverageRule.calculateSellIn(nPendingDays);
            const newPrice = fullCoverageRule.calculatePrice(nPendingDays, initialPrice);

            assert.strictEqual(newPrice, initialPrice + 1);
            assert.strictEqual(newNPendingDays, nPendingDays - 1);

        });


        it('should increase the price by 2 when sellIn reaches 0', function () {

            const fullCoverageRule = new FullCoverageRule();

            let days = 2;
            let price = 5;

            days = fullCoverageRule.calculateSellIn(days);
            assert.strictEqual(days, 1);

            price = fullCoverageRule.calculatePrice(days, price);
            assert.strictEqual(price, 6);


            days = fullCoverageRule.calculateSellIn(days);
            assert.strictEqual(days, 0);

            price = fullCoverageRule.calculatePrice(days, price);
            assert.strictEqual(price, 8);

            
            days = fullCoverageRule.calculateSellIn(days);
            assert.strictEqual(days, -1);

            price = fullCoverageRule.calculatePrice(days, price);
            assert.strictEqual(price, 10);


            days = fullCoverageRule.calculateSellIn(days);
            assert.strictEqual(days, -2);

            price = fullCoverageRule.calculatePrice(days, price);
            assert.strictEqual(price, 12);

        });

    });
});