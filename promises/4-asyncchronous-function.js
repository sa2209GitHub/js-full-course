// async/await Syntax

// Asynchronous Function
const asyncFn = async () => {
    return 'Success!'
}

console.log(asyncFn())


// Asynchrous Function with Error
const asyncFunctionWithError = async () => {
    throw new Error('There was an error!')
}

asyncFunctionWithError()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))