let bi = 8324789238902385902385092357809328509435453n

let bing = BigInt(9203814590238190854)
console.log(bi);
console.log(bing);

console.log(bi + 1n)

let big = '8324789238902385902385092357809328509435453';

console.log(BigInt(big));

let sym = Symbol('tern');
let sym1 = Symbol('tern');

console.log(sym === sym1);

let symb = Symbol.for('tern');
let symb1 = Symbol.for('tern');
console.log(symb === symb1);
