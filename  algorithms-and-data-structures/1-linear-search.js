/**
*   Algorithms and Data Structures
*
*       Linear Search
*   
*   Big O complexity: O(n)
*/

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]

let count = 0

function linearSearchFn(array, item) {
    for (let i = 0; i < array.length; i++) { 
        count += 1
        if (array[i] === item) {
            return i
        }
    }
    return null
}

const linearSearchArrowFn = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i
        }
    }
    return null
}

console.log('array index:', linearSearchFn(array, 11), 'inerations:', count)
count = 0
console.log('array index:',linearSearchFn(array, 5), 'inerations:', count)
count = 0
console.log('array index:',linearSearchFn(array, 14), 'inerations:', count)
count = 0

console.log(`\narray index: ${linearSearchArrowFn(array, 11)} iterations: ${count}`)
count = 0
console.log(`array index: ${linearSearchArrowFn(array, 5)} iterations: ${count}`)
count = 0
console.log(`array index: ${linearSearchArrowFn(array,14)} iterations: ${count}`)
count = 0
