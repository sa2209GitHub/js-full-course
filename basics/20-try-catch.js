// {try...catch}

const functionWithError = () => {
    throw new Error('Some error')
}

try {
    functionWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')


try {
    throw new Error('Another error')
} catch (e) {
    console.error(e)
    console.log(e.message)
}

console.log('Continue...')
