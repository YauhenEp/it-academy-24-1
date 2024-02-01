let arr = [10, 20, 30, 40, 50];

let newStr = arr.join(' | ')

console.log(newStr);

console.log(arr.reverse());
console.log(arr.reverse());

console.log(arr.includes(50));

console.log(arr);

let something = arr.push(60)

console.log(something);
console.log(arr);
let something1 = arr.pop()

console.log(something1);
console.log(arr);

let something3 = arr.shift();

console.log(something3);
console.log(arr);

let something4 = arr.unshift(10);

console.log(something4);
console.log(arr);


let array = [10, 20, 30, 40, 50, 60, 70];
let newArray = [...array];
newArray.reverse();
console.log(array);
console.log(newArray);