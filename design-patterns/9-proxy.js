/**
 *  Structural Design Patterns
 * 
 *      Proxy
 */

function networkFetch(url) {
    return `${url} — response from the server`
}

const cache = new Set()

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]

        if (cache.has(url)) {
            return `${url} — cache response`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('angular.io'))
console.log(proxiedFetch('google.com'))
console.log(proxiedFetch('github.com'))

console.log(proxiedFetch('github.com'))
console.log(proxiedFetch('google.com'))
console.log(proxiedFetch('angular.io'))
