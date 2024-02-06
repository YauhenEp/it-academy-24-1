const users = [
    {
        name: "John",
        email: "Jogn@mail.com"
    },
    {
        name: "Nick",
        email: "Nick84@gmail.com"
    },
    {
        name: "Alex",
        email: "Alex123@gmail.com"
    },
    {
        name: "Bob",
        emal: "bb11@gmail.com"
    },
    {
        name: "Jan",
        emal: "Jan@gmail.com"
    }
]

const newUsers = users.filter(obj => obj.name.includes('a') || obj.name.includes('A'))
console.log(newUsers)

const newUsers1 = users.filter(obj => obj.name.toLowerCase().includes('a'))
console.log(newUsers1)