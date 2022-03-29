// Function Parameter Default Value

function multiplyByFactor(value, multiplier = 1) {
    return value * multiplier
}

function multiplyByFactor2(value, multiplier) {
    if (multiplier === undefined) {
        multiplier = 1
    }
    return value * multiplier
}

// Anonymous Functional Expression
const multiplyByFactor3 = function(value, multiplier = 1) {
    return value * multiplier
}

// Arrow Function
const multiplyByFactor4 = (value, multiplier = 1) => {
    return value * multiplier
}

console.log(multiplyByFactor(10, 2))
console.log(multiplyByFactor(5))

console.log(multiplyByFactor2(10, 2))
console.log(multiplyByFactor2(5))

console.log(multiplyByFactor3(10,2))
console.log(multiplyByFactor3(5))

console.log(multiplyByFactor4(10, 2))
console.log(multiplyByFactor4(5))