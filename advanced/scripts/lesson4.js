/**
 *  Asynchrony.
 *  What is Event Loop.
 *  JS SetTimeout 0
 * 
 *      Lesson 4
 */

console.group('Lesson 4. Example 1')
console.log('Start 1')
console.log('Start 2')

function timeout3sec() {
    console.log('Inside timeout3sec() function, after 3 seconds')
    console.groupEnd()
}

window.setTimeout(function() {
    console.log('Inside setTimeout() function, after 2 seconds')
}, 2000)

function timeout0() {
    console.log(('Inside timeout0() function, after 0 seconds'))
}

setTimeout(timeout3sec, 3000)
setTimeout(timeout0, 0)

console.log('End')
