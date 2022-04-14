/**
 *  Object.create()
 *  What are getters and setters
 * 
 *      Lesson 6
 */

const person = Object.create(
    {
        calculasteAge() {
            console.log(new Date().getFullYear() - this.birthYear)
        }
    },
    {
        name: {
            value: 'Jacob',
            enumerable: true,   // <<<  Makes the 'name' enumerable
            writable: true,     // <<<  Makes the 'name' writable
            configurable: true  // <<<  Makes the 'name' configurable
        },
        birthYear: {
            value: 1993,
            enumerable: false,  // <<<  default value
            writable :false     // <<<  default value
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'black'
                console.log('Set age:', value)
            }
        }
    }
)

person.name = 'Oscar'

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key:', key, ' person:', person[key])
    }
}