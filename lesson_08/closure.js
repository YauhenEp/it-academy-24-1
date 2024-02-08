// console.log(global)
// console.log(process)

function getCount() {
    let count = 0;
    return function () {
        return count++;
    }
}

const count = getCount();


const count1 = count();
console.log(count1)
console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())

const countTwo = getCount();
console.log(countTwo)

function getObject() {
    let count = {};
    return function (attribute, value) {
        count[attribute] = value
        return count;
    }
}

const obj = getObject();
console.log(obj)

console.log(obj('name', 'Dasha'))
console.log(obj('lastName', 'Petrova'))
console.log(obj('age', 19))

const obj1 = getObject();

function getArray() {
    let count = [];
    return function (value) {
        count.push(value);
        return count;
    }
}

function getCount1() {
    let count = 0;
    return count++;
}
console.log(getCount1())
console.log(getCount1())
console.log(getCount1())
console.log(getCount1())