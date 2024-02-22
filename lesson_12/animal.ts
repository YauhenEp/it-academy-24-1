interface AnimalInterface {
    readonly eyeColor: string;
    age: number;
    getNumberOfLegs: () => number;
}

class Animal implements AnimalInterface {
    protected readonly numberOfLegs: number;
    public eyeColor: string;
    public age: number;

    constructor(numberOfLegs: number, eyeColor: string, age: number) {
        this.numberOfLegs = numberOfLegs;
        this.eyeColor = eyeColor;
        this.age = age;
    }

    public getNumberOfLegs(): number {
        return this.numberOfLegs;
    }

    // public setNumberOfLegs(newNumberOfLegs): void {
    //     this.numberOfLegs = newNumberOfLegs
    // }

    protected getEyeColor(): string {
        return this.eyeColor;
    }

    public changeEyeColor(): string {
        return this.getEyeColor() + ' bright'
    }

    private getAge(): number {
        return this.age;
    }

    public changeAge(): number {
        return this.getAge() + 1
    }
 }

class Bear extends Animal {
    constructor(numberOfLegs: number, eyeColor: string, age: number) {
        super(numberOfLegs, eyeColor, age);
    }

    public getNewEyeColor(): string {
        return this.getEyeColor() + ' dark'
    }

    // public setNewAge(): number {
    //     return this.getAge;
    // }
}

const bear: Bear = new Bear(4, 'blue', 10);
const animal: Animal = new Animal(6,'grey', 3)

console.log(bear.getNumberOfLegs())
console.log(animal.getNumberOfLegs())

console.log(bear.getNewEyeColor())
console.log(animal.changeEyeColor())

console.log(animal.changeAge())

abstract class Car {
    static color: string
    age: number
    constructor(age: number) {
        this.age = age
    }

    static setColor(newColor: string): void {
        this.color = newColor;
    }
}

class BMW extends Car {
    constructor(age: number) {
        super(age);
    }

    get carAge() {
        return this.age
    }
}

const bmw = new BMW(102)
console.log(bmw.carAge)

Car.setColor('white');
console.log(Car.color)


























