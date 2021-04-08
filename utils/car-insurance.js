class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }
    updatePrice() {

        this.products.filter(product => product.sellIn > 0).forEach(product => {
            product.sellIn--;

            if (product.sellIn === 0) { // just expired
                product.price = product.price / 2;
            }

        });

        return this.products;
    }
}

module.exports = {
    CarInsurance
};