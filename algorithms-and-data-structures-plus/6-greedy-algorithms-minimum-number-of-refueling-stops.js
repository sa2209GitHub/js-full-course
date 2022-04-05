/**
 *  Algorithms and Data Structures
 * 
 *      Greedy Algorithms
 * 
 *  Minimum Number of Refueling Stops
 */

const countMinStepsFn = (stations, maxDistance = 400) => {
    let stepsQty = 0
    let currentPosition = 0
    let nextStop

    while (currentPosition < stations.length - 1) {
        nextStop = currentPosition
        while (currentPosition < stations.length - 1 &&
            stations[nextStop + 1] - stations[currentPosition] <= maxDistance) {
                nextStop++
            }

            if (currentPosition === nextStop) {
                return null
            }

            if (nextStop < stations.length - 1) {
                stepsQty++
            }

            currentPosition = nextStop
    }
    return stepsQty
}

const myCountMinStepsFn = (stations, maxDistance = 400) => {
    distances = []
    let accumulator = 0

    if (stations.length === 0) {
        console.log('Done')
        return 'stations empty'
    }

    distances.push(stations.shift())

    console.log(distances)
    console.log(stations)

    // return 'Feature not ready yet!'
    return myCountMinStepsFn(stations)
}


const stations = [0, 200, 375, 550, 750, 950]

console.log('[ countMinStepsFn: ]')

console.log(countMinStepsFn(stations) !== null ?
            countMinStepsFn(stations) : `It is impossible to get from point 'A' to point 'B'`)

console.log(countMinStepsFn([0, 200, 400, 800, 1115]) !== null ?
            countMinStepsFn([0, 200, 400, 800, 1115]) : `It is impossible to get from point 'A' to point 'B'`)

console.log(countMinStepsFn([0, 200, 400, 920, 1215]) !== null ?
            countMinStepsFn([0, 200, 400, 920, 1215]) : `It is impossible to get from point 'A' to point 'B'`)

console.log(countMinStepsFn([0, 200, 400, 720, 760, 780, 930, 1115, 1200, 1400, 1500, 1600]) !== null ?
            countMinStepsFn([0, 200, 400, 720, 760, 780, 930, 1115, 1200, 1400, 1500, 1600]) : `It is impossible to get from point 'A' to point 'B'`)

// Uncompleted!
console.log('\n[ myCountMinStepsFn: ]')

console.log(myCountMinStepsFn([0, 200, 375, 550, 750, 950]) !== null ?
            myCountMinStepsFn([0, 200, 375, 550, 750, 950]) : `It is impossible to get from point 'A' to point 'B'`)