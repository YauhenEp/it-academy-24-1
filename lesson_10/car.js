const Factory = require('./factory')

class Car extends Factory {

}

module.exports = new Car();

const car = new Car();
car.create()