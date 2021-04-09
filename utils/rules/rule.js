class Rule {
    maxPriceAllowed;

    constructor(maxPriceAllowed = 50) {
        this.maxPriceAllowed = maxPriceAllowed;
    }

    calculateSellIn(sellIn) {
        return --sellIn;
    }

    calculatePrice(sellIn, price) {

        if (sellIn > 0) return this.limitPrice(price -= 1);
        return this.limitPrice(price -= 2);
    }

    limitPrice(price) {

        price = price < 0 ? 0 : price;

        return price <= this.maxPriceAllowed ? price : this.maxPriceAllowed;
    }
}


module.exports = {
    Rule
};