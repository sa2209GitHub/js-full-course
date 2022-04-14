/**
 *  Server Requests
 *  Fetch, XMLHttpRequest (XHR), Ajax
 * 
 */

const requestUrl = 'https://jsonplaceholder.typicode.com/users'

// XMLHttpRequest (XHR) <<< NOT WORKING!
console.groupCollapsed('Lesson 14. Example 1 (XMLHttpRequest (XHR))')

const xhr = new XMLHttpRequest()

xhr.open('GET', requestUrl)

xhr.responseType = () => 'json'

xhr.onload = () => {
    if (xhr.status >= 400) {
        console.error(xht.response)
    } else {
        console.log(xhr.response)
    }
}

xhr.send()

console.groupEnd()