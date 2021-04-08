class Rule {
    constructor() { }

    calculateSellIn(sellIn) {
        return --sellIn;
    }

    calculatePrice(sellIn, price) {

        if (sellIn > 0) return price -= 1;
        return price -= 2;
    }
}


module.exports = {
    Rule
};