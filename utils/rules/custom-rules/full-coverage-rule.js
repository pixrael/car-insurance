const { Rule } = require('../rule');

class FullCoverageRule extends Rule {

    constructor() { }

    calculatePrice(sellIn, price) {
        if (sellIn > 0) return price += 1;

        return price += 2;
    }
}

module.exports = {
    FullCoverageRule
}