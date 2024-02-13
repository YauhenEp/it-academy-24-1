// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после
// которой промис должен зарезолвится (то есть выполнится успешно).

// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve('Success')
//   }, 3000)
// })
//     .then((result) => {
//         console.log(result)
//         return result;
//     })
//
async function func(prom) {
    console.log('prom ---- ', await prom);
}
//
// func(prom)

//Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после которой промис
// должен зареджектится (то есть выполнится с ошибкой).

// const prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('ERRROR')
//     }, 3000)
// })
//     .then((result) => {
//         console.log(result)
//         return result;
//     })
//     .catch((err) => {
//         console.log(err)
//         return err;
//     })

// func(prom1)

// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так, чтобы
// сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
// Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6
// до 10.

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}

getRandom(12, 10)

// const prom2 = new Promise((resolve, reject) => {
//     const random = getRandom(1, 10);
//     setTimeout(() => {
//       if(random <= 5) {
//           resolve(random)
//       } else {
//           reject(`Error ${random}`)
//       }
//     }, random * 1000 )
// })
// prom2.then((result) => {
//     console.log(result)
// })
//     .catch(err => {
//         console.log(err)
//     })


// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так,
// чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего
// промиса. После окончания манипуляций выведите число консоль лог на экран.

function getPromise(number, timeout) {
    return new Promise((res) => {
        setTimeout(() => {
            res(number * number)
        }, timeout)
    })
}

const prom4 = new Promise((resolve, reject) => {
    const random = getRandom(1, 10);
    resolve(random);
})
    .then((result) => {
        return getPromise(result, 3000)
    })
    .then((result) => {
        return getPromise(result, 3000)
    })
    .then((result) => {
        return getPromise(result, 3000)
    })
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })




















