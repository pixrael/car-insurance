function formatToRawString(productsDayZero, productStatesInDays) {

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

module.exports = { formatToRawString };