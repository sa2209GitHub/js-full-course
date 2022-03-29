// Conditional Instructions
// {if} in Functions

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }

    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }

    return a + b
}

const sumPositiveNumbers2 = (a, b) => {
    if (typeof a !== 'number') {
        return 'Argument \'a\' is not a number'
    }

    if (typeof b !== 'number') {
        return 'Argument \'b\' in not a number'
    }

    if (a <= 0) {
        return 'Number \'a\' are not positive'
    }

    if (b <= 0) {
        return 'Number \'b\' are not positive'
    }

    return a + b
}

console.log(sumPositiveNumbers(-2, 22))
console.log(sumPositiveNumbers('Age', 5))
console.log(sumPositiveNumbers(4, 6))

console.log(sumPositiveNumbers2(-2, 0))
console.log(sumPositiveNumbers2(1, -3))
console.log(sumPositiveNumbers2(true, 2))
console.log(sumPositiveNumbers2(4, true))
console.log(sumPositiveNumbers2(10, 12))