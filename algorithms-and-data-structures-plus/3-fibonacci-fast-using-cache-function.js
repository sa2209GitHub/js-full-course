/**
 *  Algorithms and Data Structures
 * 
 *      Fibonacci Numbers
 * 
 *  Trivial (slow) and non-trivial (fast) Solutions
 */

// Cache Method
const cacheFn = (fn) => {
    const cache = []
    
    return function (n) {

        if (cache[n]) {
            return cache[n]
        }

        let result = fn(n)
        cache[n] = result
        return result
    }
}

const fibonacciFn = (n) => {
    if (n === 0 || n === 1) {
        return n
    }
    return cachedFibonacciFn(n - 1) + cachedFibonacciFn(n - 2)
}

const cachedFibonacciFn = cacheFn(fibonacciFn)

console.log(cachedFibonacciFn(0))
console.log(cachedFibonacciFn(1))
console.log(cachedFibonacciFn(3))
console.log(cachedFibonacciFn(2))
console.log(cachedFibonacciFn(10))
console.log(cachedFibonacciFn(34))
console.log(cachedFibonacciFn(55))
console.log(cachedFibonacciFn(99))
console.log(cachedFibonacciFn(12))
console.log(cachedFibonacciFn(10))
console.log(cachedFibonacciFn(10))

