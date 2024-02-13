const person = {
    name: 'Dasha',
    lastName: 'Ivanova',
    _age: 18,
    isMarried: false,
    move: function () {
        console.log('moving');
    },
    setAge: function () {
        this._age += 1;
    },
    getAge: function () {
        return this._age;
    },
    setLastName: function (lastName) {
        this.lastName = lastName;
    }
}

person.setAge();
console.log(person);
console.log(person.getAge())
person.setLastName('Petrova')
console.log(person)

let obj = {};
const obj1 = {
    name: 'YYYY',
    toString: function () {
        return this.name
    }
}

obj1.toString();

const newObj = Object.assign(obj, obj1);