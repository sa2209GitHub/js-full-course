// Promises
// Creating Promises

const myPromise = new Promise((resolve, reject) => {
    /**
     * Performing Asyncronous Actions
     * 
     * Inside this function, you need to call one
     * of the resolve or reject functions as a result
     */
})

// Getting the Result of a Promise
myPromise
    .then(value => {
        /**
         * Actions in case of successful execution of the promise
         */
    })
    .catch(error => {
        /**
         * Actions in case of a promise rejection
         */
    })