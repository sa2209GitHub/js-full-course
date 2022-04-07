/**
 *  What is the context of 'this'.
 *  How call, bind, apply work.
 * 
 *      Lesson 2
 */

function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Hannah',
    age: 24,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`${this.name}'s job: ${job}`)
        console.log(`Phone: ${phone}`)
        console.groupEnd()
    }
}

const stella = {
    name: 'Stella',
    age: 23
}

// const fnStellaInfoLog = person.logInfo.bind(stella, 'Developer', '+78127833231')
// fnStellaInfoLog()

// person.logInfo.bind(stella, 'Developer', '+78127833231')
// person.logInfo.call(stella, 'Developer', '+78127833231')
person.logInfo.apply(stella, ['Developer', '+78127833231'])