const Car = require('./car');

class Taxi extends Car {
    constructor(carClass, numberOfPassengers) {
        super(carClass);
        this.numberOfPassengers = numberOfPassengers;
        this.isTaxiWithChild = false;
    }

    addKidChairToTaxi() {
        this.isTaxiWithChild = true;
        return this;
    }

    removeKidChairToTaxi() {
        this.isTaxiWithChild = false;
        return this;
    }
}

module.exports = Taxi;