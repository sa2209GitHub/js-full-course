/**
 *  Structural Desing Patterns
 * 
 *      Adapter
 */

class OldCalculator {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return t1 + t2
            case 'sub':
                return t1 - t2
            default: return NaN
        }
    }
}

class NewCalculator {
    add(t1, t2) {
        return t1 + t2
    }

    sub (t1, t2) {
        return t1 - t2
    }
}

class CalculatorAdapter {
    constructor() {
        this.calculator = new NewCalculator()
    }

    operations (t1, t2, operation) {
        switch (operation) {
            case 'add':
                return this.calculator.add(t1, t2)
            case 'sub':
                return this.calculator.sub(t1, t2)
            case 'mult':
                return t1 * t2
            case 'div':
                return t1 / t2
            default:
                return NaN
        }
    }
}

const oldCalc = new OldCalculator()
console.log(oldCalc.operations(10, 5, 'add'))

const newCalc = new NewCalculator()
console.log(newCalc.add(10, 5))

const calcAdapter = new CalculatorAdapter()
console.log(calcAdapter.operations(25, 10, 'sub'))
console.log(calcAdapter.operations(25, 10, 'add'))
console.log(calcAdapter.operations(25, 10, 'mult'))
console.log(calcAdapter.operations(25, 10, 'div'))