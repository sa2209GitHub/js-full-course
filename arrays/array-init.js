/**
 *  JavaScript Arrays
 * 
 *      Creating an Array
 *      Accessing Array Elements
 *      Changing an Array Element
 *      Access the Full Array
 */

// Creating an Array
console.log('*** Creating an Array ***')
const emptyArray = []
console.log('emptyArray:', emptyArray)

const carsArray = ['Saab', 'Volvo', 'Honda', 'Volkswagen', 'Mercedes']
console.log('carsArray:', carsArray)

const namesArray = [
    'Oliver',
    'Jack',
    'Harry',
    'Jacob',
    'Charley',
    'Thomas'
]
console.log('namesArray:', namesArray)

const newArray = new Array(1, 2, 3, 4, 5)     // Creating an Array. Using the JavaScript Keyword new
console.log('newArray:', newArray)

// Accessing Array Elements
console.log('\n*** Accessing Array Element ***')
console.log('carsArray[2]:', carsArray[2])
console.log('namesArray[0]:', namesArray[0])
console.log('newArray[4]:', newArray[4])

// Changing an Array Element
console.log('\n*** Changing an Array Element ***')
carsArray[0] = 'Opel'
console.log('carsArray:', carsArray)

// Acces the Full Array
console.log('\n *** Access the Full Array ***')
console.log('carsArray:', carsArray)
console.log('namesArray:', namesArray)
console.log('newArray:', newArray)