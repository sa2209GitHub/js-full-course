/**
 *  Algorithms and Data Structures
 * 
 *      Fibonacci Numbers
 * 
 *  Big O complexity: O(?)
 */

// fibonacciFn numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765

const fibonacciFn = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacciFn(n - 1) + fibonacciFn(n - 2)
}

n = 3
console.log(`n = ${n}   fibonacciFn(${n}) =`, fibonacciFn(n))

n = 34
console.log(`n = ${n}   fibonacciFn(${n}) =`, fibonacciFn(n))

