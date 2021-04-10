const { Product } = require('../product');

function importProductsFromJSON(json) {
    const products = [];
    json.filter(p => p.name !== '' && p.name !== 'name').forEach(p => {
        products.push(new Product(p.name, parseInt(p.sellIn), parseInt(p.price)));
    });


    return products;
}

function importProductsFromJSONFilterByNameProduct(json, name) {
    const products = [];
    json.filter(p => p.name === name).forEach(p => {
        products.push(new Product(p.name, parseInt(p.sellIn), parseInt(p.price)));
    });


    return products;
}


function importProductsFromJSONFilterByPostionOfProduct(json, pos) {
    const products = [];
    json.filter(p => p.name === name).forEach(p => {
        products.push(new Product(p.name, parseInt(p.sellIn), parseInt(p.price)));
    });


    return products;
}

module.exports = { importProductsFromJSON, importProductsFromJSONFilterByNameProduct };