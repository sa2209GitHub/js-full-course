/**
 *  Design Patterns
 * 
 *      Prototype
 */

const car = {
    wheels: 4,

    init() {
        console.log(`I'am a car. I have ${this.wheels} wheels. My owner is ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Jack'
    }
})

console.log('carWithOwner.__proto__ === car ?', carWithOwner.__proto__ === car)

carWithOwner.init()