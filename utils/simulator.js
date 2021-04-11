const { Product } = require('./product');
const { CarInsurance } = require('./car-insurance');
const carInsurance = new CarInsurance();
const { formatToRawString } = require('./helpers/product-formatter');

function getRawStringFromSimulation(products, days) {
    const productsObject = products.map(product => new Product(product.name, product.sellIn, product.price));

    carInsurance.setProducts(productsObject);

    const updatedProducts = [];

    for (let day = 0; day < days; day++) {
        carInsurance.updatePrice();
        updatedProducts.push(...carInsurance.getCurrentStateProducts());
    }

    return formatToRawString(products, updatedProducts);
}

module.exports = { getRawStringFromSimulation };