function getProductsResultFromSimulation(days, carInsurance) {

    const updatedProducts = [];

    for (let day = 0; day < days; day++) {
        carInsurance.updatePrice();
        updatedProducts.push(...carInsurance.getCurrentStateProducts());
    }

    return updatedProducts;
}

module.exports = { getProductsResultFromSimulation };