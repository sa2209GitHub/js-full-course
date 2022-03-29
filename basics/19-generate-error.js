// Generate error

const functionWithError = () => {
    throw new Error('Some error')
}

functionWithError()

console.log('Continue...')