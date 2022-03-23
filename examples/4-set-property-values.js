// Set Property Values

const myCity = {
    city: 'Moscow',
    popular: false,
    country: 'Russia',
}

console.table(myCity)

myCity.city = 'New Yourk'
myCity.country = 'USA'
myCity.popular = true

console.log('myCity.city = \'New Yourk\'')
console.log('myCity.country = \'USA\'')
console.log('myCity.popular = true')

console.table(myCity)

console.log('myCity.city:', myCity.city)
console.log('myCity.country:', myCity.country)
console.log('myCity.popular:', myCity.popular)

console.log('myCity[\'city\']:', myCity['city'])
console.log('myCity[\'country\']:', myCity['country'])
console.log('myCity[\'popular\']:', myCity['popular'])