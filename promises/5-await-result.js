// async/await Syntax
// await Result

const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 1000))

const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFn()

for (let i = 0; i < 5; i += 1) {
    console.log('... other code is running ...')
}
