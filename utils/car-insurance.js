const { RuleFactory } = require('./rules/ruleFactory');

class CarInsurance {

    ruleFactory;

    constructor(products = []) {
        this.products = products;
        this.ruleFactory = new RuleFactory();
    }
    updatePrice() {

        this.products.forEach(product => {

            const rule = this.ruleFactory.getRuleInstace(product.name);

            product.price = rule.calculatePrice(product.sellIn, product.price);
            product.sellIn = rule.calculateSellIn(product.sellIn);

        });

        return this.products;
    }
}

module.exports = {
    CarInsurance
};