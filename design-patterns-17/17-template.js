/**
 *  Behavioral Design Patterns
 * 
 *      Template
 */

class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    job() {
        return `${this.name}: performs ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name}: salary = ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'coding'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'testing'
    }
}

const developer = new Developer('Kyle', 6800)
console.log(developer.getPaid())
console.log(developer.job())

const tester = new Tester('Jack', 3200)
console.log(tester.getPaid())
console.log(tester.job())