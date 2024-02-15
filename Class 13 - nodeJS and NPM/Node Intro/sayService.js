function sayHello(name) {
    return `Hello ${name}!`
}

function sayBye(name) {
    return `Goodbye ${name}!`
}

// Old way of exporting
module.exports = {
    helloFunc: sayHello,
    byeFunc: sayBye
}