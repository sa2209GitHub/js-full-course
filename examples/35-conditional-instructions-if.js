// Conditional Instructions
// if

let val = 10

console.log('val > 5:', val > 5)

if (val > 5) {
    val += 20
}

console.log(val)

const person = {
    age: 20
}

console.table(person)

if (!person.name) {
    console.log('Name not specified')
}

// if() chain

const age = 25

if (age >= 18) {
    console.log('Is adult')
}

if (age >= 12 && age <= 18) {
    console.log('Is teenager')
}

if (age < 12) {
    console.log('Is child')
}