/**
 *  Algorithms and Data Structures
 * 
 *      Dijkstra’s Algorithm
 * 
 *  Big O complexity: O(?)
 */

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

const searchShortPathFn = (graph, start, end) => {
    const costs = {}
    const processed = []
    let neighbors = {}

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 999999
        }
    })
    let node = findNodeLowestCostFn(costs, processed)

    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findNodeLowestCostFn(costs, processed)
    }
    return costs
}

const findNodeLowestCostFn = (costs, processed) => {
    let lowestCost = 999999
    let lowestNode

    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}

console.log(searchShortPathFn(graph, 'a', 'g'))