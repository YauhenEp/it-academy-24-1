() => {};

let arr = [10, 20, 30, 40];

let newArr = arr.map(function (arrayElement) {
    return arrayElement * 3
})

let newArray = arr.map(arrayElement => arrayElement * 3)

console.log(newArr)
console.log(newArray)
console.log(arr)

let arr1 = ['str', 'tra', 'smd', 'dla'];

const newArr1 = arr1.map(arrayElement => arrayElement + 'wed');

console.log(newArr1);

const person = {
    name: 'Dasha',
    lastName: 'Petrova',
    getName: function () {
        return `Hello ${this.name}`;
    }
}

console.log(person.getName())

const person1 = {
    name: 'Masha',
    lastName: 'Petrova',
    getName: () => {
        return `Hello ${this.name}`;
    }
}

console.log(person1.getName())

