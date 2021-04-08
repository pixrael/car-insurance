const { Rule } = require('../rule');

class MegaCoverageRule extends Rule {

    constructor() { super(); }

    calculateSellIn(sellIn) {
        return sellIn;
    }

    calculatePrice(sellIn, price) {
        return price;
    }
}

module.exports = {
    MegaCoverageRule
}