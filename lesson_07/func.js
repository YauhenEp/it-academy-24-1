
// getRandomNumber(500, 550)

function getRandomNumber(min, max, fractionDigit = 2) {
    const number = parseFloat((Math.random() * (max - min) + min).toFixed(fractionDigit));
    console.log(number);
    return number;
}

// getRandomNumber(10, 20);
// getRandomNumber(40, 50, 5);
// getRandomNumber(100, 150, 4);
// getRandomNumber(1000, 1100, 1);



const getRandom = function (min, max) {
    console.log('I am here')
    return Math.floor(Math.random() * (max - min) + min);
}

// console.log(getRandom(asd, 20))
//
// // console.log(asd)
// var asd = 10
//
// console.log(getRandom(asd, 20))

function sum(num, numTwo) {
    let s = 0;
    for(let i = 0; arguments.length > i; i++) {
        s += arguments[i];
    }
    return s;
}
console.log(sum(12, 25, 12, 56, 34, 78))
console.log(sum(12, 25, 12, 56, 34, 78, 47, 33, 45))