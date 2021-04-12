function formatToRawString(productsDayZero, productStatesInDays) {
    const result = buildResultOutput(productsDayZero, productStatesInDays);

    return result;
}

function formatToResultWithDays(productsDayZero, productStatesInDays) {

    const result = {
        title: 'OMGHAI!',
        products: [
            {
                day: '',
                name: '----day 0----',
                sellIn: '',
                price: ''
            }
        ]
    };

    productsDayZero.forEach(product => {
        result.products.push({
            day: '0',
            name: product.name,
            sellIn: '' + product.sellIn,
            price: '' + product.price
        });
    });

    const nProductsByDay = productsDayZero.length;
    const totalDays = productStatesInDays.length / nProductsByDay;


    let iProduct = 0;
    for (let i = 1; i <= totalDays; i++) {

        result.products.push({
            day: '',
            name: `----day ${i}----`,
            sellIn: '',
            price: ''
        });

        for (let j = 0; j < nProductsByDay; j++) {

            const product = productStatesInDays[iProduct];
            result.products.push({
                day: '' + i,
                name: product.name,
                sellIn: '' + product.sellIn,
                price: '' + product.price
            });

            iProduct++;
        }

    }

    return result;
}


function outputResultsByConsole(productsDayZero, productStatesInDays) {
    
    const result = buildResultOutput(productsDayZero, productStatesInDays);

    console.log(result);
}

function buildResultOutput(productsDayZero, productStatesInDays){
    const nProductsByDay = productsDayZero.length;
    const nDays = productStatesInDays.length / nProductsByDay;

    let result = 'OMGHAI!\r\n';

    const allProducts = [...productsDayZero, ...productStatesInDays];


    for (let i = 0; i <= nDays; i++) {
        const productsAtDayI = allProducts.slice(i * nProductsByDay, i * nProductsByDay + nProductsByDay);

        result += `-------- day ${i} --------\r\n`;
        result += `name, sellIn, price\r\n`;
        productsAtDayI.forEach(product => {
            result += `${product.name}, ${product.sellIn}, ${product.price}\r\n`;
        });
        result += '\r\n';
    }

    return result;
}



module.exports = { formatToRawString, formatToResultWithDays, outputResultsByConsole };