// Cycles
// {for...in} For Arrays

const myArray = [true, 10, 'John', null]

console.log('ITERATING ARRAY ELEMENTS IN A FOR...IN LOOP...\n* * * IT IS NOT RECOMMENDED TO DO SO! * * *')
console.log('myArray elements:', myArray)

// It is not recommended to do so
for (const key in myArray) {
    console.log(myArray[key])
}