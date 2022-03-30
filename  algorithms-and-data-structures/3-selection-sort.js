/**
 *  Algorithms and Data Stuctures
 * 
 *      Selection Sort
 * 
 *  Big O complexity: O(n^2)
 */

const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 66, 82, 11, 12, 14]

let count = 0

const selectionSortFn = (array) => {
    count = 0
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < array.length; j++) {
            count += 1
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
        }
        let = tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log('original array:', array, 'result:', selectionSortFn(array), 'for', count, 'iterations'); count = 0