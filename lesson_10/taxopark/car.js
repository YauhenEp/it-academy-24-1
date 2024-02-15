class Car {
    constructor(carClass) {
        this.carClass = carClass;
        this.age = 0;
    }

    setAge(age) {
        this.age = age;
    }
}

module.exports = Car;