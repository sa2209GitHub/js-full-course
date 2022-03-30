/**
 *  Algorithms and Data Structures
 * 
 *      Quick Sort
 * 
 *  BigO compexity: O(log2n * n)
 */

const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 44, 43, 1, 10, 6]

let count = 0

const quickSortFn = function(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greather = []

    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greather.push(array[i])
        }
    }
    return[...quickSortFn(less), pivot, ...quickSortFn(greather)]
}

console.log('original array:', array, 'sorted array:', quickSortFn(array), 'iterations:', count)
count = 0