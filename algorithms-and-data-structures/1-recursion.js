/**
 *  Algorithms and Data Structures
 * 
 *      Recursion
 * 
 *  Big O complexity; O(?)
 */

let n

const factorialFn = (n) => {
    if (n === 1) {
        return 1
    }
    return n * factorialFn(n - 1)
}

n = 5
console.log(`${n}!:`, factorialFn(n))

n = 7
console.log(`${n}!:`, factorialFn(n))

n = 9
console.log(`${n}!:`, factorialFn(n))

n = 11
console.log(`${n}!:`, factorialFn(n))

n = 17
console.log(`${n}!:`, factorialFn(n))

n = 3
console.log(`${n}!:`, factorialFn(n))

n = 2
console.log(`${n}!:`, factorialFn(n))

n = 1
console.log(`${n}!:`, factorialFn(n))