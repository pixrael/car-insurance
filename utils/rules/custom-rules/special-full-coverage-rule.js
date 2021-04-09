const { Rule } = require('../rule');

class SpecialFullCoverageRule extends Rule {

    constructor() { super(); }

    calculatePrice(sellIn, price) {

        if (sellIn > 10) return this.limitPrice(price += 1);
        if (sellIn > 5 && sellIn <= 10) return this.limitPrice(price += 2);
        if (sellIn > 0 && sellIn <= 5) return this.limitPrice(price += 3);

        return 0;
    }
}

module.exports = {
    SpecialFullCoverageRule
}