/**
 *  Promises
 *  What is it and how does it work
 * 
 *      Lesson 5
 */

// 1
// console.group('Lesson 5. Example 1')
// console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'aws',
//         port: 5000,
//         statut: 'online'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//         console.groupEnd()
//     }, 2000)
// }, 2000)

// 2
// console.group('Lesson 5. Example 2')

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')

//         const backendData = {
//             server: 'aws',
//             port: 5000,
//             statut: 'online'
//         }
//         resolve(backendData)
//     }, 2000)
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//             // reject(data)     <<< Generate error
//         }, 2000)
//     })
// })
// .then(clientData => {
//     // console.log('Data received', clientData)
//     clientData.fromPromise = true
//     return clientData
// })
// .then(data => {
//     console.log('Modified', data)
// })
// .catch(err => {
//     console.error('Error: ', err)
// })
// .finally(() => {
//     console.log('Finally')
//     console.groupEnd()
// })

// 3
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => {
//     console.group('Lesson 5. Example 3')
//     console.log('After 2 seconds')
// })

// sleep(3000).then(() => {
//     console.log('After 3 seconds')
//     console.groupEnd()
// })

// 4
console.group('Lesson 5. Example 4')
Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
    console.groupEnd()
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})
