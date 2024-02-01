try {
    console.log(str);
    let str = 'Hello';
} catch (error) {
    console.log(`We catch you ha-ha!!! : ${error}`);
}

console.log('Hello It Academy');

try {
    let num = 10 / 0;
    if(num === Infinity) {
        throw new Error(`You can't divide by zero!!!!`)
    }
} catch (err) {
    console.log(err)
}