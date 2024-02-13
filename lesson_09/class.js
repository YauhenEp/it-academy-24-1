class Car {
  constructor(color, brand, model) {
      this.color = color;
      this.brand = brand;
      this.model = model;
      this.numberOfWheel = 4;
  }
  setWheels = function (numberOfWheels) {
      this.numberOfWheel = numberOfWheels;
  }
}

console.log(new Car('white', 'toyota', 'camry'));

class NewCar extends Car {

    #maxSpeed;
    constructor(color, brand, model, maxSpeed) {
        super(color, brand, model);
        this.#maxSpeed = maxSpeed
    }

    getMaxSpeed() {
        return this.#maxSpeed;
    }
}

const newCar = new NewCar('black', 'bmw', 'x5', 200)

console.log(newCar.getMaxSpeed())

console.log(newCar);

class NewNewCar extends NewCar {
    constructor(color, brand, model, maxSpeed) {
        super(color, brand, model, maxSpeed);
    }
}
const newNewCar = new NewNewCar('green', 'mercedes', 'benz', 250)
console.log(newNewCar);
console.log(newNewCar.getMaxSpeed())
