/**
 *  Map, Set, WeakMap, WeakSet
 * 
 *      Lesson 13
 */

// Object to Entries / Entries to Object
const obj = {
    name: 'Noah',
    age: 33,
    job: 'Righteous'
}

const entries = [
    ['name', 'Noah'],
    ['age', 26],
    ['job', 'Righteous']
]

console.groupCollapsed('Lesson 13. Example 1 (Object to Entries / Entries to Object)')
console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))
console.groupEnd()

// Map
const map = new Map([
    ['name', 'Noah'],
    ['age', 26],
    ['job', 'Righteous']
])

console.groupCollapsed('Lesson 13. Example 2 (Map)')
console.log(map)
console.log(map.get('job'))

map
    .set('uid', 'NFL-33840-000-9001')
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ??')

console.log(map)
console.log(map.get(obj))
console.log(map.get(NaN))

map.delete('job')

console.log(map)

console.log(map.has('job'))
console.log(map.has('name'))
console.log(map.size)

map.clear()

console.log(map)
console.groupEnd()

// Map methods
console.groupCollapsed('Lesson 13. Example 3 (Map methods)')

const map2 = new Map(entries)

console.log('Getting entries...')
for (let entry of map2.entries()) {
    console.log(entry)
}

console.log('Getting keys and values...')
for (let [key, value] of map2) {
    console.log(key, value)
}

console.log('Getting values...')
for (let val of map2.values()) {
    console.log(val)
}

console.log('Getting keys...')
for (let key of map2.keys()) {
    console.log(key)
}

console.log('Getting keys and values, using forEach()...')
map2.forEach((val, key, m) => {
    console.log(val, key)
})
console.groupEnd()

// Map to Array
console.groupCollapsed('Lesson 13. Example 4 (Map to Array)')

const array = [...map2]
console.log(array)

const arr2 = Array.from(map2)
console.log(arr2)

console.groupEnd()

// Map to Object
console.groupCollapsed('Lesson 13. Example 5 (Map to Object)')

const mapObj = Object.fromEntries(map2.entries())

console.log(mapObj)

console.groupEnd()

// Map. Case study
console.groupCollapsed('Lesson 13. Example 6 (Map. Case study)')

const users = [
    { name: 'William', age: 25 },
    { name: 'Evelyn', age: 17 },
    { name: 'Aubrey', age: 49 },
    { name: 'Noah', age: 22 },
    { name: 'Lillian', age: 21 },
    { name: 'Alexander', age: 34 },
    { name: 'Michael', age: 15 },
    { name: 'Eleanor', age: 26 },
    { name: 'Luna', age: 35 },
    { name: 'George', age: 26 },
    { name: 'Jacob', age: 17 },
    { name: 'Zoey', age: 16 },
    { name: 'Oliver', age: 30 }
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 6000 * 60))

const lastVisit = (user) => {
    return visits.get(user)
}

console.log(lastVisit(users[0]))
console.log(lastVisit(users[1]))
console.log(lastVisit(users[2]))

console.groupEnd()

// Set
console.groupCollapsed('Lesson 13. Example 7 (Set)')

const set = new Set([ 1, 1, 2, 3, 4, 4, 4, 5, 6 ])

console.log(set)

set.add(8).add(9).add(7).add(5)

console.log(set)

console.log(set.has(30))
console.log(set.has(2))

console.log(set.size)

console.log(set.delete(2))

console.log(set.size)

console.log(set.values())
console.log(set.keys())
console.log(set.entries())

set.clear()

console.log(set.size)

console.groupEnd()

// Set. Case study
console.groupCollapsed('Lesson 13. Example 8 (Set. Case study)')

const arr3 = [ 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 6, 6, 7 ]

const uniqValues = (array) => {
    return [...new Set(array)]
    // OR >>> // return Array.from(new Set(array))
}

console.log(arr3)
console.log(uniqValues(arr3))

console.groupEnd()

// WeakMap
console.groupCollapsed('Lesson 13. Example 9 (WeakMap)')

const wmap = new WeakMap([
    [obj, 'obj data']
])

let abrakadabra

console.log(wmap.has(obj))
console.log(wmap.has(abrakadabra))

console.groupEnd()

// WeakMap. Case study
console.groupCollapsed('Lesson 13. Example 9 (WeakMap. Case study)')

const cache = new WeakMap()

const cacheUser = user => {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let zoey = {name: 'Zoey'}
let jacob = {name: 'Jacob'}

cacheUser(zoey)
cacheUser(jacob)

console.log(cache.has(zoey))
console.log(cache.has(jacob))

jacob = null

console.log(cache.has(zoey))
console.log(cache.has(jacob))

console.groupEnd()

// WeakSet
console.groupCollapsed('Lesson 13. Example 10 (WeakSet)')

const wsUsers = [
    { name: 'William', age: 25 },
    { name: 'Evelyn', age: 17 },
    { name: 'Aubrey', age: 49 },
    { name: 'Noah', age: 22 },
    { name: 'Lillian', age: 21 },
    { name: 'Alexander', age: 34 },
    { name: 'Michael', age: 15 },
    { name: 'Eleanor', age: 26 },
    { name: 'Luna', age: 35 },
    { name: 'George', age: 26 },
    { name: 'Jacob', age: 17 },
    { name: 'Zoey', age: 16 },
    { name: 'Oliver', age: 30 }
]

const wsVisits = new WeakSet()

wsVisits
    .add(wsUsers[0])
    .add(wsUsers[1])
    .add(wsUsers[4])
    .add(wsUsers[7])

console.log(wsVisits.has(wsUsers[0]))
console.log(wsVisits.has(wsUsers[1]))
console.log(wsVisits.has(wsUsers[4]))
console.log(wsVisits.has(wsUsers[7]))

wsUsers.splice(5, 1)

console.log(wsVisits.has(wsUsers[0]))
console.log(wsVisits.has(wsUsers[1]))
console.log(wsVisits.has(wsUsers[4]))
console.log(wsVisits.has(wsUsers[7]))

console.log(wsUsers)

console.groupEnd()
