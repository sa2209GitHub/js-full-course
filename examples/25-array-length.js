// Array Length

const myArray = [1, 2, 3, 4]
console.log('myArray:', myArray, 'myArray.length:', myArray.length)

myArray[2] = 'some string'
console.log('myArray:', myArray, 'myArray.length:', myArray.length)

myArray[4] = true
console.log('myArray:', myArray, 'myArray.length:', myArray.length)

// <2 empty items>
myArray[7] = true
console.log('myArray:', myArray, 'myArray.length:', myArray.length)

// <1 empty item>
myArray[6] = false
console.log('myArray:', myArray, 'myArray.length:', myArray.length)

myArray[5] = false
console.log('myArray:', myArray, 'myArray.length:', myArray.length)