// Ternary Operators

let value = 11

console.log(value, 'value >= 0 ? value : -value', value >= 0 ? value : -value)


value = -5

const res = value >= 0 ? value : -value

console.log(value,'     const res = value >= 0 ? value : -value     ', res)


value = 'Some Text'

const result = typeof value === 'string' ? 'This is a string' : 'It\'s not a string'

console.log(value, '     const result = typeof value === \'string\' ? \'This is a string\' : \'It\'s not a string\'     ', result)