function greet(name = 'Dasha') {
    return `Hello ${name}!`
}

async function pause() {
    return new Promise(res => {
        setTimeout(() => {
            res('Pause')
        }, 3000)
    })
}

function add(name = 'Dasha') {
    return `Hello ${name}!`
}

module.exports = { greet, pause}