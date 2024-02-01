let num = 10;

while(num !== 10) {
    console.log(`Variable is ${num}`);
    num++;
}

do {
    console.log(`Variable is ${num}`);
    num++;
} while (num === 10)

let arr = [10, 20, 30, 40, 50]
for(let i = 0; arr.length > i; i++) {
    if(arr[i] === 30) {
        continue
    }
    arr[i] += 1;
    console.log(`Number is ${arr[i]}`)
}

let str = 'toyota'

for(let i = 0; str.length > i; i++) {
    let newStr = str[i] + 'ooo';
    console.log(`Number is ${newStr}`)
}

for(let arrayElement of arr) {
    arrayElement += 4;
    console.log(arrayElement)
}



const person = {
    name: 'Dasha',
    lastName: 'Petrova',
    age: 18
}

for(let key in person) {
    console.log(`Key equal ${key}`);
    console.log(`Value equals ${person[key]}`)
}

for(let arrayElement of str) {
    let newElement = arrayElement + '4';
    console.log(newElement)
}