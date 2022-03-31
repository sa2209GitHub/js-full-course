/**
 *  Algorithms and Data Structures
 * 
 *      Breadth-first Search
 * 
 *  Big O complexity: O(?)
 */

//  const matrix = [
//     [0, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0]
// ]

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

let x, y
let count = 0

const breadthSearchFn = (graph, start, end) => {
    let queue = []

    queue.push(start)
    
    while (queue.length > 0) {
        count += 1

        const current = queue.shift()

        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
}

x = 'a'; y = 'g'
console.log(breadthSearchFn(graph, x, y) ? `The path from '${x}' to '${y}' exist` : `The path from '${x}' to '${y}' does not exist`, 'in', count, 'steps'); count = 0

x = 'a'; y = 'b'
console.log(breadthSearchFn(graph, x, y) ? `The path from '${x}' to '${y}' exist` : `The path from '${x}' to '${y}' does not exist`, 'in', count, 'steps'); count = 0

x = 'a'; y = 'c'
console.log(breadthSearchFn(graph, x, y) ? `The path from '${x}' to '${y}' exist` : `The path from '${x}' to '${y}' does not exist`, 'in', count, 'steps'); count = 0

x = 'a'; y = 'd'
console.log(breadthSearchFn(graph, x, y) ? `The path from '${x}' to '${y}' exist` : `The path from '${x}' to '${y}' does not exist`, 'in', count, 'steps'); count = 0

x = 'a'; y = 'e'
console.log(breadthSearchFn(graph, x, y) ? `The path from '${x}' to '${y}' exist` : `The path from '${x}' to '${y}' does not exist`, 'in', count, 'steps'); count = 0

x = 'a'; y = 'f'
console.log(breadthSearchFn(graph, x, y) ? `The path from '${x}' to '${y}' exist` : `The path from '${x}' to '${y}' does not exist`, 'in', count, 'steps'); count = 0


x = 'a'; y = 'x'
console.log(breadthSearchFn(graph, x, y) ? `The path from '${x}' to '${y}' exist` : `The path from '${x}' to '${y}' does not exist`, 'in', count, 'steps'); count = 0

x = 'a'; y = 'y'
console.log(breadthSearchFn(graph, x, y) ? `The path from '${x}' to '${y}' exist` : `The path from '${x}' to '${y}' does not exist`, 'in', count, 'steps'); count = 0

x = 'a'; y = 'z'
console.log(breadthSearchFn(graph, x, y) ? `The path from '${x}' to '${y}' exist` : `The path from '${x}' to '${y}' does not exist`, 'in', count, 'steps'); count = 0
