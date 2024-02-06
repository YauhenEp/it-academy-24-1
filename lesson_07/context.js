const person = {
    name: 'Dasha',
    lastName: 'Petrova',
    getName: function (greet) {
        return `${greet} ${this.name} ${this.lastName}!`;
    }
}

const person1 = {
    name: 'Oleg',
    lastName: 'Ivanov',
}

console.log(person.getName('Hello'));

const greet = person.getName.call(person, 'Hi')
console.log(greet);

const greet1 = person.getName.call(person1, 'Hi Hi')
console.log(greet1);

const greet2 = person.getName.apply(person1, ['Hi Hi asdfff'])
console.log(greet2);

const greet3 = person.getName.bind(person1, ['Hi Hi asdfff'])
console.log(greet3);
console.log(greet3());