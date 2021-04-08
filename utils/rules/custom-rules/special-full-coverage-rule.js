const { Rule } = require('../rule');

class SpecialFullCoverageRule extends Rule {

    constructor() { super(); }

    calculatePrice(sellIn, price) {
        if (sellIn > 0) return price -= 1;
        return price -= 2;
    }
}

module.exports = {
    SpecialFullCoverageRule
}