const assert = require('assert');

const { MegaCoverageRule } = require('../../../utils//rules/custom-rules/mega-coverage-rule');

describe('Mega Coverage Rule |', function () {
    describe('Should keep fixed price and sellin - ', function () {
        it('should return the same price and sellIn no matter the input', function () {

            const megaCoverageRule = new MegaCoverageRule();

            const nPendingDays = 5;
            const initialPrice = 20;

            const newNPendingDays = megaCoverageRule.calculateSellIn(nPendingDays);
            const newPrice = megaCoverageRule.calculatePrice(nPendingDays, initialPrice);

            assert.strictEqual(newPrice, initialPrice);
            assert.strictEqual(newNPendingDays, nPendingDays);

        });

        it('should return the same price and sellIn no matter the input, checking negatives values in days', function () {

            const megaCoverageRule = new MegaCoverageRule();


            let days = megaCoverageRule.calculateSellIn(10);
            assert.strictEqual(days, 10);

            let price = megaCoverageRule.calculatePrice(10, 30);
            assert.strictEqual(price, 30);


            days = megaCoverageRule.calculateSellIn(-5);
            assert.strictEqual(days, -5);

            price = megaCoverageRule.calculatePrice(-100, 5);
            assert.strictEqual(price, 5);

        });

    });
});