// Primitive Data Types

const num = 99          // Number

const str = 'abc'       // String

const bool = true       // Boolean

nul = null              // null

let udef                // undefined

const char = '@'        // Symbol

console.log('Primitive Data Types:', num, str, bool, nul, udef, char)


// Reference Data Type

const objA = {
    a: 10,
    b: true
}

const copyObjA = objA

console.log('Reference Data Type:', objA, objA.a, objA.b)
console.log('Reference Data Type:', copyObjA, copyObjA.a, copyObjA.b)

copyObjA.a = 22
copyObjA.b = false

console.log('Reference Data Type:', objA, objA.a, objA.b)
console.log('Reference Data Type:', copyObjA, copyObjA.a, copyObjA.b)

copyObjA.c = 'abcdefg'

console.log('Reference Data Type:', objA, objA.a, objA.b, objA.c)
console.log('Reference Data Type:', copyObjA, copyObjA.a, copyObjA.b, copyObjA.c)
