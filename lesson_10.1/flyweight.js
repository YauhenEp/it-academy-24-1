class Car {
    constructor(model) {
        this.model = model;
    }
}

class CarFactory {
    constructor() {
        this.models = {};
    }

    create(name) {
        let model = this.models[name];
        if(model) return model;
        this.models[name] = new Car(name);
        return this.models[name];
    }

    getModels() {
        console.table(this.models);
    }
}

const factory = new CarFactory();

const WV = factory.create('WV');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const toyota = factory.create('Toyota');
const toyota1 = factory.create('Toyota');
const honda = factory.create('Honda');
const honda1 = factory.create('Honda');

console.log(toyota1)
factory.getModels();
