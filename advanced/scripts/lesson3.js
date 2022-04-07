/**
 *  Closures
 * 
 *      Lesson 3 
 */

// 1
function createCalcFunction(n) {
    return function() {
        console.group('Lesson 3. Example 1')
        console.log(1000 * n)
        console.groupEnd()
    }
}

const calc = createCalcFunction(42)
calc()

// 2
function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTwo = createIncrementor(2)
const addThree = createIncrementor(3)

console.group('Lesson 3. Example 2')
console.log(addOne(10))
console.log(addTwo(10))
console.log(addThree(10))
console.groupEnd()

// 3
function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

console.group('Lesson 3. Example 3')
console.log(comUrl('google'))
console.log(comUrl('wikipedia'))
console.log(comUrl('facebook'))

console.log(ruUrl('yandex'))
console.log(ruUrl('mail'))
console.groupEnd()

// 4
function bind(context, fn) {
    return function(...args) {
        fn.apply(context, ...args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Jack',
    age: 24,
    job: 'Frontend'
}

const person2 = {
    name: 'Victoria',
    age: 22,
    job: 'SMM'
}

console.group('Lesson 3. Example 4')
bind(person1, logPerson)()
bind(person2, logPerson)()
console.groupEnd()