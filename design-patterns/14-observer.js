/**
 *  Behavioral Design Patterns
 * 
 *      Observer
 */

class Subject {
    constructor(observer) {
        this.observers = []
    }
    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observer = this.observer.filter(obs => obs !== observer)
    }

    fire(action) {
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state
        this.initialState = state
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break
            case 'DECREMENT':
                this.state = -- this.state
                break
            case 'ADD':
                this.state += action.payload
                break
            default: this.state = this.initialState
        }
    }
}

const stream$ = new Subject()

const observer1 = new Observer()
const observer2 = new Observer(42)

stream$.subscribe(observer1)
stream$.subscribe(observer2)

console.log(observer1.state)
console.log(observer2.state)

stream$.fire({type: 'INCREMENT'})
console.log(observer1.state)
console.log(observer2.state)

stream$.fire({type: 'DECREMENT'})
console.log(observer1.state)
console.log(observer2.state)

stream$.fire({type: 'ADD', payload: 10})
console.log(observer1.state)
console.log(observer2.state)