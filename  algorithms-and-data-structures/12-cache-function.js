/**
 *  Algorithms and Data Structures
 * 
 *      Cache Function
 * 
 *  Big O complexity: 0(?)
 */

const cacheFn = (fn) => {
    const cache = []
    
    return function (n) {

        if (cache[n]) {
            console.log('value taken from cache:', cache[n])
            return cache[n]
        }
        let result = fn(n)
        console.log('value calculated by function:', result)
        cache[n] = result
        return result
    }
}

const factorialFn = (n) => {
    let result = 1
    
    while (n != 1) {
        result *= n
        n -= 1
    }
    return result
}

const cachedFactorialFn = cacheFn(factorialFn)

for (let i = 1; i < 10; i++) {
    cachedFactorialFn(i)
}

for (let i = 9; i > 0; i--) {
    cachedFactorialFn(i)
}