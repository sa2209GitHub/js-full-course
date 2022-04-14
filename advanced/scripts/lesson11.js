/**
 *  Generators
 *  Symbol iterator. for of
 * 
 *      Lesson 11
 */

function* numberiterator(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

function* charIterator(s = 'char') {
    for (let i = 0; i < s.length; i++) {
        yield s[i]
    }
}

console.group('Lesson 11. Example 1')
for (let k of numberiterator(7)) {
    console.log(k)
}

for (let l of charIterator('Hello')) {
    console.log(l)
}
console.groupEnd()