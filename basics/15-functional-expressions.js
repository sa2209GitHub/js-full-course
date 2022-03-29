// Functional Expressions

const myFunction = function(a, b) {
    let c
    c = a * b
    return c
}

console.log(myFunction(6, 6))

setTimeout(function() {
    console.log('Delayed message')}, 1000)