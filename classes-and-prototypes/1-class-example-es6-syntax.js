// Classes and Prototypes
// ES6 syntasx

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

console.log(firstComment.text)
console.log(firstComment.votesQty)

firstComment.upvote()

console.log(firstComment.text)
console.log(firstComment.votesQty)


const secondComment = new Comment('Second Comment')

console.log(secondComment.text)
console.log(secondComment.votesQty)

secondComment.upvote()
secondComment.upvote()
secondComment.upvote()

console.log(secondComment.text)
console.log(secondComment.votesQty)
