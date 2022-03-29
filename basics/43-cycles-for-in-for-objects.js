// Cycles
// {for...in} For Objects

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}


// v1

console.log('Iterate myObject keys with for...in:')

for (const key in myObject) {
    console.log(`${key}:`, myObject[key])
}


// v2

console.log('\nIterate myObject keys with forEach:')

Object.keys(myObject).forEach(key => {
    console.log(`${key}:`, myObject[key])
})


// v3
console.log('\nIterate myObject values with forEach:')

Object.values(myObject).forEach(value => {
    console.log(value)
})