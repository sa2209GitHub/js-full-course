/**
 *  Structural Design Patterns
 * 
 *      Flyweight
 */

class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)
        
        if (candidate) {
            return candidate
        }

        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(model) {
        return this.cars.find(car => car.model === model)
    }
}

const factory = new CarFactory()

const volvoS90 = factory.create('Volvo S90', 22199)
const mercedes600 = factory.create('Mercedes 600', 32399)   // <<<  model: 'Mercedes 600'
const audiA6 = factory.create('Audi A6', 23489)
const mercedes600S = factory.create('Mercedes 600', 41299)  // Tryung to create an instance with an already existing value

console.log(volvoS90)
console.log(mercedes600)
console.log(audiA6)
console.log(mercedes600S)

console.log('mercedes600 === mercedes600S ?', mercedes600 === mercedes600S)