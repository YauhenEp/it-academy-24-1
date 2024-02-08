function getFactorial(number) {
    return (number !== 1) ? number * getFactorial(number - 1) : 1;
}

console.log(getFactorial(5));

function getFibonachi(number) {
    return number <= 1 ? number : getFibonachi(number - 1) + getFibonachi(number - 2)
}

console.log(getFibonachi(11));
