const Car = require('./car');

class Truck extends Car {
    constructor(carClass, capacity) {
        super(carClass);
        this.capacity = capacity;
    }
}

module.exports = Truck;