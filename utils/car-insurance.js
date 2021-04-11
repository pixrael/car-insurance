const { RuleFactory } = require('./rules/ruleFactory');
const { Product } = require('./product');

class CarInsurance {
    products;
    ruleFactory;

    constructor(products = []) {
        this.products = products;
        this.ruleFactory = new RuleFactory();
    }

    setProducts(products) {
        this.products = products;
    }
    updatePrice() {

        this.products.forEach(product => {

            const rule = this.ruleFactory.getRuleInstace(product.name);

            product.price = rule.calculatePrice(product.sellIn, product.price);
            product.sellIn = rule.calculateSellIn(product.sellIn);

        });

        return this.products;
    }

    getCurrentStateProducts() {
        return this.products.map(product => new Product(product.name, product.sellIn, product.price));
    }
}

module.exports = {
    CarInsurance
};