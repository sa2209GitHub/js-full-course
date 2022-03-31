/**
 *  Algorithms and Data Structures
 * 
 *      Graph Search
 * 
 *  Big O complexity: O(?)
 */

const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11
                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 10
            },
            {
                v: 15
            }
        ]
    }
]

const recursiveGraphSearchFn = (tree) => {
    let sum = 0
    
    
    tree.forEach(node => {
        sum += node.v

        if (!node.c) {
            return node.v
        }

        sum += recursiveGraphSearchFn(node.c)
    })
    return sum
}

const graphSearchFn = (tree) => {
    if (!tree.length) {
        return 0
    }
    let sum = 0
    let stack = []

    tree.forEach(node => stack.push(node))

    while (stack.length) {
        const node = stack.pop()
        sum += node.v
        
        if (node.c) {
            node.c.forEach(child => stack.push(child))
        }
    }
    return sum
}

console.log(recursiveGraphSearchFn(tree))

console.log(graphSearchFn(tree))
