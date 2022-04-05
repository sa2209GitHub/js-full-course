/**
 *  Algorithms and Data Structures
 * 
 *      Set and Map
 * 
 *  Big O complexity: O(?)
 */

const map = new Map()

const objKey = {id:12} 

map.set(objKey, 'John')
map.set('lastname', 'Doe')

console.log(map.get(objKey), map.get('lastname'))

const set = new Set()

set.add(5)
set.add(5)
set.add(5)
set.add('John')
set.add('Doe')
set.add(4)
set.add(3)
set.add('John')
console.log(set)