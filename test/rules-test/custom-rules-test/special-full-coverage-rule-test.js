const assert = require('assert');

const { SpecialFullCoverageRule } = require('../../../utils//rules/custom-rules/special-full-coverage-rule');

describe('Special Full Coverage Rule |', function () {
    describe('Should increase price- ', function () {
        it('should increase in 1 when is more than 10 days', function () {

            const specialFullCoverageRule = new SpecialFullCoverageRule();

            const nPendingDays = 12;
            const initialPrice = 20;

            const newNPendingDays = specialFullCoverageRule.calculateSellIn(nPendingDays);
            const newPrice = specialFullCoverageRule.calculatePrice(nPendingDays, initialPrice);

            assert.strictEqual(newPrice, initialPrice + 1);
            assert.strictEqual(newNPendingDays, nPendingDays - 1);

        });

        it('should increase in 2 when pending days is between 6 and 10 including boths', function () {

            const specialFullCoverageRule = new SpecialFullCoverageRule();

            let days = 7;
            let price = 10;

            days = specialFullCoverageRule.calculateSellIn(days);
            price = specialFullCoverageRule.calculatePrice(days, price);

            assert.strictEqual(days, 6);
            assert.strictEqual(price, 12);

            ///
            price = specialFullCoverageRule.calculatePrice(10, 12);
            assert.strictEqual(price, 14);

            ///
            price = specialFullCoverageRule.calculatePrice(6, 80);
            assert.strictEqual(price, 82);

        });

        it('should increase in 3 when pending days is between 1 and 5 including boths', function () {

            const specialFullCoverageRule = new SpecialFullCoverageRule();
            ///
            let price = specialFullCoverageRule.calculatePrice(1, 12);
            assert.strictEqual(price, 15);

            ///
            price = specialFullCoverageRule.calculatePrice(5, 80);
            assert.strictEqual(price, 83);

            ///
            price = specialFullCoverageRule.calculatePrice(3, 100);
            assert.strictEqual(price, 103);

        });


        it('should make the price 0 when the is expired', function () {

            const specialFullCoverageRule = new SpecialFullCoverageRule();
            ///
            let price = specialFullCoverageRule.calculatePrice(0, 500);
            assert.strictEqual(price, 0);

            ///
            price = specialFullCoverageRule.calculatePrice(-1, 80);
            assert.strictEqual(price, 0);

            ///
            price = specialFullCoverageRule.calculatePrice(-3, 100);
            assert.strictEqual(price, 0);

        });



    });
});