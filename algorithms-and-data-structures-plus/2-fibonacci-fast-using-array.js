
/**
 *  Algorithms and Data Structures Plus
 * 
 *      Fibonacci Numbers
 * 
 *  Trivial (slow) and non-trivial (fast) Solutions
 */

// Fast
const fibonacciFastFn = (n) => {
    const cacheArray = new Array(n + 1)

    cacheArray[0] = 0
    cacheArray[1] = 1

    for (let i = 2; i <= n; i++) {
        cacheArray[i] = cacheArray[i - 1] + cacheArray[i - 2]
    }
    return cacheArray[n]
}

console.log('fibonacciFastFn:',
            fibonacciFastFn(0), fibonacciFastFn(33), fibonacciFastFn(10), fibonacciFastFn(13),
            fibonacciFastFn(41), fibonacciFastFn(101), fibonacciFastFn(201))