const nums = [10, 153, 63, 7, 98, 55, 746, 9];

let sum = 0;

for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
}

console.log(sum)

const newSum = nums.reduce((prev, cur) => prev + cur, {});

console.log(newSum);

const newNums = nums.filter((num) => num > 10)
console.log(newNums);