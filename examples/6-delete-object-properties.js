// Delete Object Properties

const myCity = {
    city: 'Moscow',
    popular: true,
    country: 'Russia',
}

console.table(myCity)

console.log('delete myCity.popular')
delete myCity.popular

console.table(myCity)

console.log('delete myCity.country')
delete myCity.country

console.table(myCity)
