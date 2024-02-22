import { add, minus } from "./types";

function multiply(numberOne: number, numberTwo: number): number {
    return numberOne * numberTwo
}

// multiply(10, 20)
// add(5, 5)
// minus('10', '10')

async function getText(locator: string): Promise<string> {
    return `Hello ${locator}`;
}

function addOverload(x: string | number, y: string | number): number | string | void {
    if(typeof x === 'number' && typeof y === "number") {
        return x + y;
    }
    if(typeof x === 'string' && typeof y === "string") {
        return x + y;
    }
    if(typeof x === 'number' && typeof y === "string") {
        return x + y;
    }
    if(typeof x === 'string' && typeof y === "number") {
        return x + y;
    }
    return;
}

function identity<T>(arg: T): T {
    console.log(typeof arg)
    return arg;
}

// identity(10)
// identity('str')
// identity(true)


function overGeneric<T, P>(x: T, y: P): string {
    console.log(typeof x)
    console.log(typeof y)
    return `${x} and ${y}`;
}

overGeneric(10, '10')
overGeneric('10', '10')
overGeneric(true, false)
overGeneric(null, null)
overGeneric(undefined, undefined)
overGeneric({}, [])

console.log(Array.isArray([]))
console.log(Array.isArray({}))
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(10))














