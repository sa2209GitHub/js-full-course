/**
 *  Algorithms and Data Structures
 * 
 *      Binary Search
 * 
 *  Big O complexity: O(log(N))
 */

const binarySearch = (array, key) => {

    // Sort the Array
    array.sort((a, b) => a - b)

    low = 0
    high = array.length - 1

    while (low <= high) {
        let middle = Math.floor(low + (high - low) / 2)

        if (key === array[middle])
            return middle

        if (key < array[middle])
            high = middle - 1

        if (key > array[middle])
            low = middle + 1
    }
    return null
}

for (let i = 0; i < 20; i++) {
    console.log(binarySearch([7, 3, 1, 9, 4, 5, 8, 2], i) !== null ?
    binarySearch([7, 3, 1, 9, 4, 5, 8, 2], i) : 'Element not found')
}
