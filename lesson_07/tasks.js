let ssa = [
    {name: "a", width: "10", len: "12"},
    {name: "b", width: "12", len: "14"},
    {name: "c", width: "15", len: "11"}
]

    // [{name: "a", square: "120"},{name: "b", square: "168"},{name: "c", square: "165"}]

let newArray = ssa.map(obj => {
    return {
        name: obj.name,
        square: (obj.width * obj.len).toString()
    };
})

console.log(newArray);

let newArray1= [];
ssa.forEach(obj => {
    return newArray1.push({
        name: obj.name,
        square: (obj.width * obj.len).toString()
    });
});

console.log(newArray1);

let newArray2= [];

for(let i =0; i < ssa.length; i++) {
    newArray2.push({
        name: ssa[i].name,
        square: (ssa[i].width * ssa[i].len).toString()
    })
}

console.log(newArray2);