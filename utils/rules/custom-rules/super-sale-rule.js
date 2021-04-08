const { Rule } = require('../rule');

class SuperSaleRule extends Rule {

    constructor() { }

    calculatePrice(sellIn, price) {
        if (sellIn > 10) return price += 1;
        if (sellIn > 5 && sellIn <= 10) return price += 2;
        if (sellIn > 0 && sellIn <= 5) return price += 3;

        return 0;
    }
}

module.exports = {
    SuperSaleRule
}