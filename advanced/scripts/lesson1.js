/**
 *  Prototypes
 * 
 *      Lesson 1
 */

const person = new Object ({
    name: 'George',
    age: 32,
    greet: function() {
        console.log('Greetings')
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello!')
}

const elizabeth = Object.create(person)
elizabeth.name = 'Elizabeth'

const str = 'I am string'

const altStr = new String('I am string')

const array = [1, 2, 3, 4, 5]

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.group()
console.log(array)
console.log(array.multBy(10))
console.groupEnd()