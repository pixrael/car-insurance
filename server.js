const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');
const { Product } = require('./utils/product');
const { CarInsurance } = require('./utils/car-insurance');
const carInsurance = new CarInsurance();
const { formatToRawString, formatToResultWithDays, outputResultsByConsole } = require('./utils/helpers/product-formatter');

const { getProductsResultFromSimulation } = require('./utils/simulator');


if (process.env.RUN_DEFAULT) {    

    const productsObject = [
        new Product('Medium Coverage', 10, 20),
        new Product('Full Coverage', 2, 0),
        new Product('Low Coverage', 5, 7),
        new Product('Mega Coverage', 0, 80),
        new Product('Mega Coverage', -1, 80),
        new Product('Special Full Coverage', 15, 20),
        new Product('Special Full Coverage', 10, 49),
        new Product('Special Full Coverage', 5, 49),
        new Product('Super Sale', 3, 6),
    ];

    const days = 30;

    carInsurance.setProducts(productsObject);

    const productsFromSimulation = getProductsResultFromSimulation(days, carInsurance);

    outputResultsByConsole(productsObject, productsFromSimulation);

}


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ products: [] });
});

app.post('/simulation', (req, res) => {

    const products = req.body.products;
    const days = req.body.days;

    const productsObject = products.map(product => new Product(product.name, product.sellIn, product.price));

    carInsurance.setProducts(productsObject);

    const productsFromSimulation = getProductsResultFromSimulation(days, carInsurance);

    const rawStringResult = formatToRawString(productsObject, productsFromSimulation);

    const resultWithDays = formatToResultWithDays(productsObject, productsFromSimulation);


    res.json({ result: resultWithDays, 'raw-result': rawStringResult });
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));