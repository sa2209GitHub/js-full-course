/**
 *  Algorithms and Data Structures Plus
 * 
 *      Fibonacci Numbers
 * 
 *  Trivial (slow) and non-trivial (fast) Solutions
 */

// Slow
const fibonacciSlowFn = (n) => {
    if (n === 0 || n === 1) {
        return n
    }
    return fibonacciSlowFn(n - 1) + fibonacciSlowFn(n - 2)
}

console.log('fibonacciSlowFn:', fibonacciSlowFn(0), fibonacciSlowFn(1),
            fibonacciSlowFn(2), fibonacciSlowFn(3), fibonacciSlowFn(4),
            fibonacciSlowFn(5), fibonacciSlowFn(6), fibonacciSlowFn(33),
            fibonacciSlowFn(10), fibonacciSlowFn(13), fibonacciSlowFn(41))