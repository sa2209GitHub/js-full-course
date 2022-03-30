/**
 *  Algorithms and Data Structures
 * 
 *      Binary Search
 * 
 *  Big O complexity: O(log2n)
 */

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

let count = 0

const binarySearchFn = function(array, item) {
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


for (let i = 0; i < 25; i++) {
    console.log(binarySearchFn(array, i, 0, array.length) != null ? 'found at index:' : 'element not found:',
                binarySearchFn(array, i, 0, array.length), '  iterations:', count)
    count = 0
}

// console.log(`array index: ${binarySearchFn(array, 0)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 1)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 2)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 3)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 4)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 5)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 6)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 7)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 8)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 9)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 10)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 11)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 12)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 13)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 14)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 15)} iterations: ${count}`)

// count = 0
// console.log(`array index: ${binarySearchFn(array, 22)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 21)} iterations: ${count}`)
// count = 0
// console.log(`array index: ${binarySearchFn(array, 20)} iterations: ${count}`)