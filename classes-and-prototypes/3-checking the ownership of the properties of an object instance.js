// Classes and Prototypes
// Checking the Ownership of the Properties of an Object Instance

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    
    upvote() {
        this.votesQty +=1
    }
}

const firstComment = new Comment('First Comment')

console.log(firstComment.hasOwnProperty('text'))
console.log(firstComment.hasOwnProperty('votesQty'))
console.log(firstComment.hasOwnProperty('upvote'))
console.log(firstComment.hasOwnProperty('hasOwnProperty'))