let bool: boolean = true;
let num: number = 10;
let str: string = 'string';

let arr: string[] = ['10', 'true', 'string'];
let arr1: Array<string> = ['10', 'true', 'string'];

let arr2: [number, string, boolean] = [10, 'str', true]
let arr3: any[] = [10, 'str', true]

// enum Color {
//     'Red', 'White', 'Blue'
// }
//
// let color: Color = Color.White
// console.log(color)

function add(numberOne: number, numberTwo: number = 23): number {
    return numberOne + numberTwo;
}

console.log(add(10));

function minus(name: string, lastName: string): void {
    console.log(`${name} ${lastName}`)
}

minus('Nina', 'Petrova');

interface Person {
    name: string,
    lastName: string,
    age: number,
    getAge: () => number,
    setAge: (age: number) => void,
    car: string,
    family: FamilyObject,
    isMarried?: boolean
}

interface FamilyObject {
    motherName: string,
    fatherName: string
}

const person: Person = {
    name: 'Nina',
    lastName: 'Petrova',
    age: 10,
    getAge: function (): number {
        return this.age;
    },
    setAge: function (newAge: number): void {
        this.age = newAge;
    },
    car: 'toyota',
    family: {
        motherName: "Julia",
        fatherName: "Hleb"
    },
    // workRate: 90
}

interface Builder  {
    workRate: number
}

interface YangPerson extends Person {

}

type OldPerson = Person & Builder;

const oldPerson: OldPerson = {
    workRate: 90,
    name: 'Nina',
    lastName: 'Petrova',
    age: 10,
    getAge: function (): number {
        return this.age;
    },
    setAge: function (newAge: number): void {
        this.age = newAge;
    },
    car: 'toyota',
    family: {
        motherName: "Julia",
        fatherName: "Hleb"
    }
}

export {minus, add}































