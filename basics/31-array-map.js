// Array.map()
// Creating a new array based on an existing one

const myArray = [1, 2, 3]
console.log('const myArray = [1, 2, 3]:', myArray)

const newArray = myArray.map(el => el * 3)
const newestArray = myArray.map((el) => {
    return el * 3
})

console.log('const newArray = myArray.map(el => el * 3)', newArray)
console.log('const newestArray = myArray.map((el) => { return el * 3 })', newestArray)
console.log('const myArray = [1, 2, 3]:', myArray)