/**
 *  Async, Await
 *  Working with the Server using 'fetch'
 * 
 *      Lesson 8
 */

// 1
const delay = (ms) => {
    return new Promise(r => setTimeout(() => r(), ms))
}

delay(2000).then(() => {
    console.group('Lesson 8. Example 1')
    console.log('2 sec')
    console.groupEnd()
})

// 2
const url = 'https://jsonplaceholder.typicode.com/todos/'

function fetchTodos() {
    return delay(2000)
        .then(() => {
            return fetch(url)
        })
        .then(response => response.json())
}

fetchTodos()
    .then(data => {
        console.group('Lesson 8. Example 2')
        console.log('Start fetching todos...')
        console.log('Data:', data)
        console.groupEnd()
    })
    .catch(e => {
        console.group('Lesson 8. Example 2')
        console.error(e)
        console.groupEnd()
    })


// Async, Await
async function fetchAsyncTodos() {
    console.group('Lesson 8. Example 3')
    console.log('Start fetching todos...')
    try {
        // await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
        console.groupEnd()
    } catch (e) {
        console.errer(e)
    } finally {
        console.groupEnd()
    }
}

fetchAsyncTodos()