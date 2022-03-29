// Classes and Prototypes
// Ownership check

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First Comment')

console.log(firstComment instanceof Comment)    // true
console.log(firstComment instanceof Object)     // true
console.log(firstComment instanceof Number)     // false
console.log(firstComment instanceof String)     // false
console.log(firstComment instanceof Array)      // false