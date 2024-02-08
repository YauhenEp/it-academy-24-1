function sum(num, numTwo) {
    let s = num + numTwo;
    console.log(arguments)
    for(let i = 2; arguments.length > i; i++) {
        s += arguments[i];
    }
    return s;
}
console.log(sum(12, 25, 12, 56, 34, 78));
console.log(sum(12, 25, 12, 56, 34, 78, 47, 33, 45));


function getSum(num, numTwo, ...nums) {
    let s = num + numTwo;
    console.log(nums)
    for(let i = 0; nums.length > i; i++) {
        s += nums[i];
    }
    return s;
}

console.log(getSum(12, 25, 12, 56, 34, 78));
console.log(getSum(12, 25, 12, 56, 34, 78, 47, 33, 45));