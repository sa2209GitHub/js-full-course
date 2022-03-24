// Cycles
// {for...of}

const myString = 'UMBABARABUMBA'

console.log('Inerate myString using {for...of}:')
console.log(`const myString = 'UMBABARABUMBA'`)

for (const letter of myString) {
    console.log(letter)
}


const myArray = [true, 10, 'John', null]

console.log('\nITERATING ARRAY ELEMENTS IN A FOR...IN LOOP...\n* * * IT IS NOT RECOMMENDED TO DO SO! * * *')
console.log('Inerate myArray using {for...of}:')
console.log('myArray elements:', myArray)

// It is not recommended to do so
for (const element of myArray) {
    console.log(element)
}


// Correct Method
console.log('\nCORRECT METHOD:')
console.log('Inerate myArray using forEach():')
console.log('myArray elements:', myArray)

myArray.forEach(element => {
    console.log(element)
})
