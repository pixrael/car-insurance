const { Rule } = require('../rule');

class MegaCoverageRule extends Rule {

    constructor() { }

    calculateSellIn(sellIn){
        return sellIn;
    }

    calculatePrice(sellIn, price) {
        return price;
    }
}

module.exports = {
    MegaCoverageRule
}