const fse = require('fs-extra')

// fse.ensureDirSync("folder1");
//
// fse.ensureFileSync('folder1/file.txt');
//
// fse.ensureDirSync("folder2");
//
// fse.moveSync('folder1/file.txt', 'folder2/file.txt');
//
// fse.ensureDirSync("folder3");
//
// fse.copySync('folder2/file.txt', 'folder3/file.txt')
//
// fse.removeSync("folder2/file.txt");
// fse.removeSync("folder3/file.txt");
//
// fse.removeSync("folder1");
// fse.removeSync("folder2");
// fse.removeSync("folder3");

// fse.ensureDir("folder1", () => {
//     fse.ensureFile('folder1/file.txt', () => {
//         fse.ensureDir("folder2", () => {
//             fse.move('folder1/file.txt', 'folder2/file.txt', () => {
//                 fse.ensureDir("folder3", () => {
//                     fse.copy('folder2/file.txt', 'folder3/file.txt', () => {
//                         fse.remove("folder2/file.txt", () => {
//                             fse.remove("folder2");
//                         });
//                         fse.remove("folder3/file.txt", () => {
//                             fse.remove("folder1");
//                             fse.remove("folder3");
//                         });
//                     })
//                 });
//             });
//         });
//     });
// });

// new Promise((resolve) => {
//     resolve(fse.ensureDir("folder1"))
// })
//     .then(() => {
//         return fse.ensureFile('folder1/file.txt')
//     })
//     .then(() => {
//         return fse.ensureDir("folder2")
//     })
//     .then(() => {
//         return fse.move('folder1/file.txt', 'folder2/file.txt')
//     })
//     .then(() => {
//         return fse.ensureDir("folder3")
//     })
//     .then(() => {
//         return fse.copy('folder2/file.txt', 'folder3/file.txt')
//     })
//     .then(() => {
//         fse.remove("folder2/file.txt")
//         fse.remove("folder3/file.txt")
//     })
//     .then(() => {
//         fse.remove("folder2");
//         fse.remove("folder1");
//         fse.remove("folder3");
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// async function getFolders() {
//     await fse.ensureDir("folder1");
//
//     await fse.ensureFile('folder1/file.txt');
//
//     await fse.ensureDir("folder2");
//
//     await fse.move('folder1/file.txt', 'folder2/file.txt');
//
//     await fse.ensureDir("folder3");
//
//     await fse.copy('folder2/file.txt', 'folder3/file.txt')
//
//     await fse.remove("folder2/file.txt");
//     await fse.remove("folder3/file.txt");
//
//     await fse.remove("folder1");
//     await fse.remove("folder2");
//     await fse.remove("folder3");
//     return 4
// }
//
// async function print() {
//     console.log(await getFolders());
// }
//
// print()


const obj = {
    status: 201,
    data: {
        message: 'Success',
        body: {
            name: 'Dasha'
        }
    }
}

const prom = new Promise((resolve, reject) => {
    if(obj.status === 200) {
        resolve(obj)
    }
    reject(`Error -- ${JSON.stringify(obj.data)}`)
})
    .then((data) => {
        console.log(data)
        data.data.body.lastName = 'Ivanova';
        return data;
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log('I am here everytime')
    })


const res1 = Promise.resolve(3);
// const rej1 = Promise.reject('ERRRROR')
console.log(res1);
// console.log(rej1);

Promise.all([Promise.resolve(3), Promise.reject('ERRRROR'), Promise.resolve(6), Promise.resolve(9), Promise.resolve(12)])
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })


function getProm(timeout) {
    return new Promise(res => {
        setTimeout(() => {
            res(`Success ${timeout}`)
        }, timeout)
    })
}

function getPromRej(timeout) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(`Reject ${timeout}`)
        }, timeout)
    })
}
Promise.race([getProm(1000), getProm(2000), getProm(3000), getPromRej(500)])
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

Promise.any([getProm(1000), getProm(2000), getProm(3000), getPromRej(500)])
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

console.log('promise result --- ', prom)

Promise.allSettled([getProm(1000), getProm(2000), getProm(3000), getPromRej(500)])
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })















