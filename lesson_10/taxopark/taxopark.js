class Taxopark {
    constructor() {
        this.autoPark = [];
    }

    addCar(car) {
        this.autoPark.push(car);
    }

    getNumberOfSeats() {
        let seats = 0;
        for(let car of this.autoPark) {
            if(car.carClass === 'taxi') {
                seats += car.numberOfPassengers;
            }
        }
        return seats;
    }

    getCommonCapacity() {
        let capacity = 0;
        for(let car of this.autoPark) {
            if(car.carClass === 'truck') {
                capacity += car.capacity;
            }
        }
        return capacity;
    }

    filterBySeats(numberOfSeats) {
        return this.autoPark.filter(car => car.numberOfPassengers >= numberOfSeats);
    }

    filterByCapacity(capacity) {
        return this.autoPark.filter(car => car.capacity >= capacity);
    }
}

module.exports = new Taxopark();