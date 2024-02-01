console.log(false == 0);
console.log('' == 0);

console.log(false === 0);
console.log('' === 0);

console.log(false != 0);
console.log('' != 0);

console.log(false !== 0);
console.log('' !== 0);

console.log('\t\r\n' == 0)
console.log('\t\r\n' === 0)

console.log(typeof (new String('new')));

let x = 0;
console.log(x = x + 1);
console.log(x += 1);
console.log(x++);
console.log(x);
console.log(++x);


console.log(1 && true && 'new' && {})

if(1 && true && 'new' && {}) {
    console.log('I am here')
}

console.log(1 && 0 && true && 'new' && {})

if(1 && 0 && true && 'new' && {}) {
    console.log('I am here')
} else {
    console.log('FALSE')
}


console.log(false || 0 || '' || NaN);

console.log(false || 0 || true || NaN);

console.log(!true);