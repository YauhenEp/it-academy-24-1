function Car(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.numberOfWheel = 4;
    this.setWheels = function (numberOfWheels) {
        this.numberOfWheel = numberOfWheels;
    }
    return this;
}

console.log(new Car('white', 'toyota', 'camry'))
console.log(new Car('black', 'bmw', 'x5'))

const nissan = new Car('red', 'nissan', 'ppp')
nissan.setWheels(10)
console.log(nissan)

function inherit(child, parent) {
    child.prototype = new parent();
}

let childCar = {}
inherit(childCar, Car)
console.log(childCar)