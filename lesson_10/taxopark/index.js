const Taxi = require('./taxi')
const Truck = require('./truck')
const taxopark = require('./taxopark')

const taxi = new Taxi('taxi', 4);
const taxi1 = new Taxi('taxi', 7);
const taxi2 = new Taxi('taxi', 5);
const taxi3 = new Taxi('taxi', 4);

const truck = new Truck('truck', 20000);
const truck1 = new Truck('truck', 10000);
const truck2 = new Truck('truck', 5000);

taxopark.addCar(taxi)
taxopark.addCar(taxi1)
taxopark.addCar(taxi2)
taxopark.addCar(taxi3)

taxopark.addCar(truck)
taxopark.addCar(truck1)
taxopark.addCar(truck2)

console.log(taxopark)
console.log(taxopark.filterByCapacity(9000))
console.log(taxopark.filterBySeats(8))
console.log(taxopark.getCommonCapacity())
console.log(taxopark.getNumberOfSeats())