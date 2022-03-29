// Avoid Object Mutations

// v1 (except nested objects)
const person = {
    name: 'Bob',
    age: 25
}

const person2 = Object.assign({}, person)

person2.name = 'Alice'
person2.age = 33

console.log(person)
console.log(person2)

// v2 (except nested objects)
const person3 = { ...person }

person3.name = 'Mikle'
person3.age = 27

console.log(person)
console.log(person3)

// v3 (include nested objects)
const person4 = JSON.parse(JSON.stringify(person))

person4.name = 'John'
person4.age = 37

console.log(person)
console.log(person4)