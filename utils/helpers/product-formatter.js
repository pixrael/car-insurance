function formatToRawString(productsDayZero, productStatesInDays) {

    const nProductsByDay = productsDayZero.length;
    const nDays = productStatesInDays.length / nProductsByDay;

    let result = 'OMGHAI!\r\n';


    for (let i = 0; i < nDays; i++) {
        result += `-------- day ${i} --------\r\n`;
    }



    return result;
}

module.exports = { formatToRawString };