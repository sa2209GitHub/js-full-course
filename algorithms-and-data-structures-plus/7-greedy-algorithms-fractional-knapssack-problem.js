/**
 *  Algotithms and Data Structures
 * 
 *      Greedy Algorithms
 * 
 *  Fractional Knapsack Problem
 */

class Item {
    constructor(weight, price) {
        this.weight = weight
        this.price = price
        }

    getPricePerUnitOfWeight() {
        return this.price / this.weight
    }

    getWeight() {
        return this.weight
    }

    getPrice() {
        return this.price
    }

    toString() {
        return `weight = ${this.weight}, price = ${this.price}, price per unit of weight = ${this.getPricePerUnitOfWeight()}`
    }
}

const myItem1 = new Item(4, 20)
const myItem2 = new Item(3, 18)
const myItem3 = new Item(2, 14)

const items = new Array(myItem1, myItem2, myItem3)

console.log('Array of myItems:')
console.table(items)

console.log('myItem1:', myItem1.toString())
console.log('myItem2:', myItem2.toString())
console.log('myItem3:', myItem3.toString())

items.sort(function (a, b) {
    return b.getPricePerUnitOfWeight() - a.getPricePerUnitOfWeight()
})
console.table(items)

console.log(items.toString(items))

W = 7

let weightSoFar = 0;
let priceSoFar = 0;
let currentItem = 0;

while (currentItem < items.length && weightSoFar !== W) {
    if (weightSoFar + items[currentItem].getWeight() < W) {
        // Take the whole Object 
        priceSoFar += items[currentItem].getPrice()
        weightSoFar += items[currentItem].getWeight()
    } else {
        // Take only Part of The Object
        priceSoFar += ((W - weightSoFar) / items[currentItem].getWeight()) * items[currentItem].getPrice()
        weightSoFar = W; // Knapsack is full
    }
    currentItem++
}

console.log('Highest item set value =', priceSoFar)