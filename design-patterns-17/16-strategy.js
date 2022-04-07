/**
 *  Behavioral Design Patterns
 * 
 *      Strategy
 */

class Vehicle {
    travelTime() {
        return this.timeTaken
    }
}

class Bus extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 18
    }
}

class Taxi extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 12
    }
}

class Motorbike extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 7
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime()
    }
}

const commute = new Commute()

console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Bus()))
console.log(commute.travel (new Motorbike()))

