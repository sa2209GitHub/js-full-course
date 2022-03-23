// Arrow Functions

const myFunction = (a, b) => {
    let c
    c = a / b
    return c
}

console.log(myFunction(9, 4))

setTimeout(() => {
    console.log('Delayed message')
}, 1000)

// Implicit Value Retun
const sum = (a, b) => a + b

console.log(sum(20, 30))