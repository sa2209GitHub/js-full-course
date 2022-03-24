// Conditional Instructions
// if() in Functions

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }

    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }

    return a + b
}

console.log(sumPositiveNumbers(-2, 22))
console.log(sumPositiveNumbers('Age', 5))
console.log(sumPositiveNumbers(4, 6))
