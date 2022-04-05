/**
 *  Algorithms and Data Structures
 * 
 *      Fibonacci Numbers
 * 
 *  Trivial (slow) and non-trivial (fast) Solutions
 */

// Memoization Method
const fibonacciMemoizationFn = (n, mem) => {
    if (n === 0 || n === 1) {
        return n
    }

    if (mem[n] !== null) {
        return mem[n];
    }

    result = fibonacciMemoizationFn(n - 1, mem) + fibonacciMemoizationFn(n - 2, mem)
    mem[n] = result
    return result
}

n = 97

const mem = new Array(n + 1)

mem.fill(null)

console.log(fibonacciMemoizationFn(n, mem))
