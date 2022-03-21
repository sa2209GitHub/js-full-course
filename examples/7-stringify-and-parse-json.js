// Stringify and Parse JSON

const userObj = {
    name: {
        first: "Elon",
        last: "Musk"
    },
    age: 44,
    growth: 178,
    weight: 77
}

console.log('Original Object:', userObj)

stringifiedUserObj = JSON.stringify(userObj)

console.log("Stringified Object:", stringifiedUserObj)

parsedUserObj = JSON.parse(stringifiedUserObj)

console.log('Parsed Object:', parsedUserObj)