/**
 *  Algorithms and Data Structures
 * 
 *      Fibonacci
 * 
 *  Big O complexity: O(?)
 */

// Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765

const fibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

n = 3
console.log(`n = ${n}   fibonacci(${n}) =`, fibonacci(n))

n = 34
console.log(`n = ${n}   fibonacci(${n}) =`, fibonacci(n))

