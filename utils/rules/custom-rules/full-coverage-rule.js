const { Rule } = require('../rule');

class FullCoverageRule extends Rule {

    constructor() { super() }

    calculatePrice(sellIn, price) {
        if (sellIn > 0) return this.limitPrice(price += 1);

        return this.limitPrice(price += 2);
    }
}

module.exports = {
    FullCoverageRule
}