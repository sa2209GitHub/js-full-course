// async/await
// Migrating from Promises


// Original code with Promises

// THIS EXAMPLE WILL ONLY WORK
// IN THE BROWSER CONSOLE BY DEFAULT!
const getData = url =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
// THIS EXAMPLE WILL ONLY WORK
// IN THE BROWSER CONSOLE BY DEFAULT!


// Refactoring: STEP 1

// THIS EXAMPLE WILL ONLY WORK
// IN THE BROWSER CONSOLE BY DEFAULT!
const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
// THIS EXAMPLE WILL ONLY WORK
// IN THE BROWSER CONSOLE BY DEFAULT!


// Refactoring: STEP 2

// THIS EXAMPLE WILL ONLY WORK
// IN THE BROWSER CONSOLE BY DEFAULT!
const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

const data = await getData(url)
// THIS EXAMPLE WILL ONLY WORK
// IN THE BROWSER CONSOLE BY DEFAULT!


// Refactoring: STEP 3

// THIS EXAMPLE WILL ONLY WORK
// IN THE BROWSER CONSOLE BY DEFAULT!
const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}
// THIS EXAMPLE WILL ONLY WORK
// IN THE BROWSER CONSOLE BY DEFAULT!


