// Functions

function sum(x, y) {
    return x + y
}

console.log(sum(5, 6), sum(11, 15), sum(10, 8))


// Passing Value by Reference (NOT RECOMMENDED)
function increasePersonAge(person) {
    person.age += 1
    return person
}

const personOne = {
    name: 'Bob',
    age: 21
}

console.log('Update Object Property by function (NOT RECOMMENDED)')
console.log(personOne)

increasePersonAge(personOne)
console.log(personOne)

increasePersonAge(personOne)
console.log(personOne)

// Copy Object
function increasePeronAgeCopy(person) {
    const updatedPerson  = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = increasePeronAgeCopy(personOne)

console.log ('Update a Copy of the Object Property by function')
console.log(personOne)
console.log(updatedPersonOne)