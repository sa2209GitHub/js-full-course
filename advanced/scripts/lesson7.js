/**
 *  All about ES6 Classes
 *  Practical use
 * 
 *      Lesson 7
 */

1
const animal = {
    name: 'Animal',
    age: 5,
    hasTail: true,
}

// 2
class Animal {
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }
    
    voice() {
        console.log('ArRRRrr!')
    }
}

const animalByClass = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})

// 3
class Cat extends Animal {
    static type = 'CAT'

    constructor(options) {
        super(options)
        this.color = options.color
    }

    get ageInCatUnits() {
        return this.age * 7
    }

    set newAge(age) {
        this.age = age
    }

    voice() {
        // super.voice()    // <<< will also call the parent method
        console.log('Meooow!')
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
})

console.group('Lesson 7. Example 1')
console.log(animal)
console.log(animalByClass)

console.log(cat)
console.log('Age in Cat units:', cat.ageInCatUnits)
console.groupEnd()

// 4
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 100,
    color: 'green'
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    size: 100,
    color: 'coral'
})