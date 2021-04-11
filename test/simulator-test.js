const assert = require('assert');
const { getProductsResultFromSimulation } = require('../utils/simulator');
const sinon = require('sinon');
const { CarInsurance } = require('../utils/car-insurance');


describe('Simulator |', function () {
    describe('Simulator.getProductsResultFromSimulation - ', function () {
        it('should spy to verify if they are being called 5 times', function () {

            const carInsurance = new CarInsurance();

            const days = 5;

            const spy = sinon.spy(carInsurance, 'updatePrice');
            const spy2 = sinon.spy(carInsurance, 'getCurrentStateProducts');


            getProductsResultFromSimulation(days, carInsurance);

            sinon.assert.callCount(spy, 5);
            sinon.assert.callCount(spy2, 5);
        });


    });
});

