const person = {
    name: 'ffff',
    lastName: 'dfdfd',
    age: 10,
}

const child = {
    ...person,
    toys: 'spiderman'
}

// console.log(child);
//
// person.isMarried = true
//
// console.log(person);
// console.log(child);
//
//
// const kid = person;
// console.log(kid)
//
// kid.car = 'bmw'
//
// console.log(person);
// console.log(kid);
//
// person.husband = true
// console.log(person);
// console.log(kid);

// decomposition

person.car = 'bmw'

person.car1 = 'dfsfd'
person.car2 = 'sdfsdfdsf'


let {name: firstName, lastName, car, age, toys = 'batman', ...rest} = person;
console.log(firstName)
console.log(lastName)
console.log(car)
console.log(age)
console.log(toys)
console.log(rest)

person.isToys = true

const {isToys} = person
console.log(isToys)

let arr = [10, 20, 30 ,40 ,50];

const [first, second, third, ...restArr] = arr;
console.log(first)
console.log(second)
console.log(third)
console.log(restArr)














