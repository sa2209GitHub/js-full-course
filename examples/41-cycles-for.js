// Cycles
// {for}

console.log('i++ (i += 1)')

for (let i = 0; i < 10; i++) {
    console.log(`i = ${i}`)
}


console.log('\ni += 3')

for (let i = 0; i < 20; i += 3) {
    console.log(`i = ${i}`)
}


// It is not recommended to do so
const myArray = ['first', 'second', 'third']

console.log('\nITERATING ARRAY ELEMENTS IN A FOR LOOP...\n* * * IT IS NOT RECOMMENDED TO DO SO! * * *')
console.log('myArray elements:', myArray)

for (let i = 0; i < myArray.length; i++) {
    console.log(`myArray[${i}]:`, myArray[i])
}


// Correct Method
const myArray2 = ['first', 'second', 'third']

console.log('\nCORRECT METHOD:')
console.log('myArray elements:', myArray2)

myArray2.forEach((element, index) => {
    console.log(`element: '${element}', index: [${index}]`)
})