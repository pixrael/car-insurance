const { Product } = require('../product');

function importProductsFromJSON(json) {
    const products = [];
    json.filter(p => p.name !== '' && p.name !== 'name').forEach(p => {
        products.push(new Product(p.name, p.sellIn, p.price));
    });


    return products;
}

module.exports = { importProductsFromJSON };