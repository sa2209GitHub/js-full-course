/**
 *  Array Methods
 *  (for...of, forEach, map, filter,
 *  reduce, find, findIndex)
 * 
 *      Lesson 12
 */

const people = [
    { name: 'William', age: 25, budget: 42000 },
    { name: 'Evelyn', age: 17, budget: 12000 },
    { name: 'Aubrey', age: 49, budget: 55000 },
    { name: 'Noah', age: 22, budget: 32000 },
    { name: 'Lillian', age: 21, budget: 22000 },
    { name: 'Alexander', age: 34, budget: 44000 },
    { name: 'Michael', age: 15, budget: 11000 },
    { name: 'Eleanor', age: 26, budget: 76000 },
    { name: 'Luna', age: 35, budget: 34000 },
    { name: 'George', age: 26, budget: 65000 },
    { name: 'Jacob', age: 17, budget: 12000 },
    { name: 'Zoey', age: 16, budget: 14000 },
    { name: 'Oliver', age: 30, budget: 18000 }
]

// Obvious case (ES5 syntax)
console.groupCollapsed('Lesson 12. Example 1 (Obvious case)')
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    // console.log(people[i].name)
}
console.groupEnd()

// for...of (ES6 syntax)
console.groupCollapsed('Lesson 12. Example 2 (for...of)')
for (let person of people) {
    console.log(person)
}
console.groupEnd()

// forEach()
console.groupCollapsed('Lesson 12. Example 3 (forEach())')
people.forEach(function (person, index, peopleArr) {
    console.log(person)
    console.log(index)
    console.log(peopleArr[index].name)
})
console.groupEnd()

console.groupCollapsed('Lesson 12. Example 4 (forEach())')
people.forEach(person => console.log(person))
console.groupEnd()

// map()
console.groupCollapsed('Lesson 12. Example 5 (map())')
const newPeople = people.map(person => {
    return `${person.name}, (${person.age})`
})
console.log(newPeople)
console.groupEnd()

// filter()
console.groupCollapsed('Lesson 12. Example 6 (Trivial implementation)')
const adults = []
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        adults.push(people[i])
    }
}
console.log(adults)
console.groupEnd()

console.groupCollapsed('Lesson 12. Example 7 (filter)')
const adults2 = people.filter(person => (person.age >= 18))
console.log(adults2)
console.groupEnd()

// reduce()
console.groupCollapsed('Lesson 12. Example 8 (reduce)')
const ammount = people.reduce((total, person) => total + person.budget, 0)
console.log(ammount)
console.groupEnd()

// find()
console.groupCollapsed('Lesson 12. Example 9 (find)')
console.log(
    people.find(person => person.name === 'Lillian'))
console.log(
    people.find(person => person.name === 'Alexander'))
console.log(
    people.find(person => person.name === 'George'))
console.log(
    people.find(person => person.name === 'non-existent'))      // <<< returns 'undefined'
console.log(
    people.find(person => person.age < 21))                     // <<< returns only the first match found
console.groupEnd()

// findIndex()
console.groupCollapsed('Lesson 12. Example 10 (findIndex)')
console.log(
    people.findIndex(person => person.name === 'Lillian'))
console.log(
    people.findIndex(person => person.name === 'William'))
console.log(
    people.findIndex(person => person.name === 'non-existent'))      // <<< returns -1
console.groupEnd()

// Use case
console.groupCollapsed('Lesson 12. Example 11 (Use case)')
console.log(
    people
        .filter(person => person.budget > 30000)
        .map(person => {
            return {
                info: `${person.name} (${person.age})`,
                budget: person.budget
            }
        }))
console.groupEnd()
