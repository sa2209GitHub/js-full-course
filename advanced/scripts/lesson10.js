/**
 *  Proxy (part 2)
 * 
 *      Examples
 */

// 1. Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue(
    {
        x: 24,
        y: 42,
    },
    0
)

console.group('Lesson 10. Example 1 (Wrapper)')
console.log(position)
position.z = 33
console.log(position)
console.groupEnd()

// 2. Hidden properties
const withHiddenProperties = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver)
            ? obj[prop]
            : void 0
    })
}

const data = withHiddenProperties({
    name: 'George',
    age: 25,
    _uid: 'DFA293479-332'
})

console.group('Lesson 10. Example 2 (Hidden properties)')
console.log(data)
for (let key in data) {
    console.log(key)
}
console.groupEnd()

// 3. Optimization
const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call[arr.item]
                        }
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    { id: 32, name: 'James', job: 'Fullstack', age: 24 },
    { id: 33, name: 'Grace', job: 'Student', age: 20 },
    { id: 34, name: 'Mason', job: 'Backend', age: 26 },
    { id: 35, name: 'Ethan', job: 'Tester', age: 27 },
    { id: 36, name: 'Sofia', job: 'Student', age: 23 },
])

console.group('Lesson 10. Example 3 (Optimisation)')
console.log(users)

users.push({id: 44, name: 'Noah', job: 'Backend', age: 42})
console.log(users)

console.log(users.findById(33))
console.log(users.findById(34))
console.log(users.findById(36))
console.log(users.findById(44))

console.groupEnd()