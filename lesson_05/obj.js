const person = {
    name: 'Dasha',
    lastName: 'Ivanova',
    age: 18,
    isMarried: false,
    getName: function () {
        return this.name;
    },
    'Number of Children': 2,
    getLastName: 'dsnfioemfgpwer'
};
console.log(person)

const obj1 = Object.create({});

person.isMarried = true;
console.log(person);
console.log(person.getName());

person["lastName"] = 'Smith'
console.log(person);


console.log(person['Number of Children']);

let getLastName = 'lastName';
console.log(person[getLastName]);
console.log(person.getLastName);

// function getAttribute(attribute) {
//     console.log(person[attribute])
//     return person[attribute];
// }
//
// getAttribute('isMarried')
// getAttribute('lastName')
// getAttribute('Number of Children')

console.log(person['1'])