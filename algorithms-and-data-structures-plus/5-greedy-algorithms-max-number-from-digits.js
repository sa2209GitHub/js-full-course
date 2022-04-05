/**
 *  Algorithms and Data Structures
 * 
 *      Greedy Algorithms
 * 
 *  Getting the Maximum Number
 *  from an arbitary set of Digits
 */

const getMaxNumberFromDigits = (digits) => {
    let result = new Array()

    digits.forEach(element => {
        if (typeof(element) === 'number') {
            result.push(element)
        }
        
    });

    result = result.sort((firstNumber, secondNumber) => {
        return secondNumber - firstNumber
    })

    return result.join('').toString()
}

const digits = new Array(3, 1, 7, 9, 9, 5)

console.log(getMaxNumberFromDigits(digits))
console.log(getMaxNumberFromDigits([1, 0, 3, 3, 9, 3, 'N'])) // 'N' will be discarded by the Function
console.log(getMaxNumberFromDigits([0, 3, 3, 4, 7, 9, 8]))