const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');
const { Product } = require('./utils/product');
const { CarInsurance } = require('./utils/car-insurance');
const carInsurance = new CarInsurance();
const { formatToRawString, formatToResultWithDays } = require('./utils/helpers/product-formatter');

const { getProductsResultFromSimulation } = require('./utils/simulator');


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