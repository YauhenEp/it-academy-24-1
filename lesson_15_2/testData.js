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

export { greet, pause}