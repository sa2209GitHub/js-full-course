/**
 *  Algorithms and Data Structures
 * 
 *      Recursive Binary Search
 * 
 *  Big O comlexity: O(log2n)
 */

 const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

 let n
 let count = 0

const recursiveBinarySearchFn = (array, item, start, end) => {
    count += 1

    let middle = Math.floor((start + end) / 2)

    if (item === array[middle])
        return middle

    if (start === end)
        return null

    if (item < array[middle]) {
        return recursiveBinarySearchFn(array, item, 0, middle - 1)
    } else {
        return recursiveBinarySearchFn(array, item, middle + 1, end)
    }
}

for (let i = 0; i < 25; i++) {
    console.log(recursiveBinarySearchFn(array, i, 0, array.length) != null ? 'found at index:' : 'element not found:',
                recursiveBinarySearchFn(array, i, 0, array.length), '  iterations:', count)
    count = 0
}

