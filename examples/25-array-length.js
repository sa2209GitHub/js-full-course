// Array Length

const myArray = [1, 2, 3, 4]
console.log('const myArray = [1, 2, 3, 4]:', myArray, 'myArray.length:', myArray.length)

myArray[2] = 'some string'
console.log('myArray[2] = \'some string\':', myArray, 'myArray.length:', myArray.length)

myArray[4] = true
console.log('myArray[4] = true:', myArray, 'myArray.length:', myArray.length)

// <2 empty items>
myArray[7] = true
console.log('myArray[7] = true:', myArray, 'myArray.length:', myArray.length)

// <1 empty item>
myArray[6] = false
console.log('myArray[6] = false:', myArray, 'myArray.length:', myArray.length)

myArray[5] = false
console.log('myArray[5] = false:', myArray, 'myArray.length:', myArray.length)