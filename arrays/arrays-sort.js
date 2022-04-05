/**
 *  JavaScript Arrays
 * 
 *      Sorting an Array
 *      Reversing an Array
 */

// Sorting an Array
const fruitsArray = ["Banana", "Orange", "Apple", "Mango"];

console.log('fruitsArray:', fruitsArray)

fruitsArray.sort()
console.log('fruitsArray.sort():', fruitsArray)

// Reversing an Array
fruitsArray.reverse()
console.log('fruitsArray.reverse():', fruitsArray)

// Numeric Sort
const pointsArray = [40, 100, 1, 5, 25, 10]

console.log('pointsArray:', pointsArray)

pointsArray.sort()
console.log('pointsArray.sort():', pointsArray, '<<< This is the wrong way to sort numeric arrays!')

pointsArray.reverse()
console.log('pointsArray.reverse():', pointsArray, '<<< This is the wrong way to sort numeric arrays!')

pointsArray.sort((a, b) => {return a - b})
console.log('pointsArray.sort((a, b) => {return a - b}):', pointsArray)

pointsArray.sort((a, b) => {return b - a})
console.log('pointsArray.sort((a, b) => {return b - a}):', pointsArray)
