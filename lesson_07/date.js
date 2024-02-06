const date = new Date();
console.log(date);

const first = new Date(Date.UTC(2000, 0, 1))
console.log(first);

console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMonth())
console.log(date.getFullYear())

const second = Date.now()
console.log(second);