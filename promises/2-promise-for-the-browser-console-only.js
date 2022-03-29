// Promises
// Fetching data with the fetch API

// THIS EXAMPLE WILL ONLY WORK
// IN THE BROWSER CONSOLE BY DEFAULT!
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))
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