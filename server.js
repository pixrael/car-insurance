const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');

const { getRawStringFromSimulation } = require('./utils/simulator');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ products: [] });
});

app.post('/simulation', (req, res) => {

    const products = req.body.products;
    const days = req.body.days;

    const rawResult = getRawStringFromSimulation(products, days);


    res.json({ products: [], 'raw-result': rawResult });
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));