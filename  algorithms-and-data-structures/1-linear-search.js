/**
*   Algorithms and Data Structures
*
*       Linear Search
*   
*   Big O complexity: O(n)
*/

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]

let count = 0

function linearSearchNamedFn(array, item) {
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

const recursiveLinearSearchFn = function(array, item, index = 0) {
    count += 1
    if (array[index] === item) {
        return index
    }
    if (array[index] === array.length) {
        return null
    }
    return recursiveLinearSearchFn(array, item, index + 1)
}

console.log('linearSearchNamedFn(array, i):')
for (let i = 0; i < 20; i++) {
    console.log(`searching '${i}':`, linearSearchNamedFn(array, i) != null ?
                'element found at index:' : 'element not found:',
                linearSearchNamedFn(array, i), 'for', count / 2, 'iterations')
    count = 0
}

console.log('\nlinearSearchArrowFn(array, i):')
for (let i = 0; i < 20; i++) {
    console.log(`searching '${i}':`, linearSearchArrowFn(array, i) != null ?
                'element found at index:' : 'element not found:',
                linearSearchArrowFn(array, i), 'for', count / 2, 'iterations')
    count = 0
}

console.log('\nrecursiveLinearSearchFn(array, i):')
for (let i = 0; i < 20; i++) {
    console.log(`searching '${i}':`, recursiveLinearSearchFn(array, i) != null ?
                'element found at index:' : 'element not found:',
                recursiveLinearSearchFn(array, i), 'for', count / 2, 'iterations')
    count = 0
}


