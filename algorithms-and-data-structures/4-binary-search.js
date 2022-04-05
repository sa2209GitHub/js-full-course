/**
 *  Algorithms and Data Structures
 * 
 *      Binary Search
 * 
 *  Big O complexity: O(log(N))
 */

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

let count = 0

const binarySearchNamedFn = function(array, item) {
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = null

    while (found === false && start <= end) {
        count += 1
        middle = Math.floor((start + end) / 2)

        if (array[middle] === item) {
            found = true
            position = middle
            return position
        }

        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log('binarySearchNamedFn(array, i, 0, array.length):')
for (let i = 0; i < 25; i++) {
    console.log(binarySearchNamedFn(array, i, 0, array.length) !== null ?
                'element found at index:' : 'element not found:',
                binarySearchNamedFn(array, i, 0, array.length), 'for', count / 2, 'iterations')
    count = 0
}