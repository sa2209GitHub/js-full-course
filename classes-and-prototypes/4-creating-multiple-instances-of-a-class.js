// Classes and Prototypes
// Creating multiple Instances of a Class

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

console.log('firstComment.text:', firstComment.text, '\nfirstComment.votesQty:', firstComment.votesQty,
            '\nsecondComment.text:', secondComment.text, '\nsecondComment.votesQty:', secondComment.votesQty,
            '\nthirdComment.text:', thirdComment.text, '\nthirdComment.votesQty:', thirdComment.votesQty)

firstComment.upvote()

secondComment.upvote()
secondComment.upvote()

thirdComment.upvote()
thirdComment.upvote()
thirdComment.upvote()
thirdComment.upvote()
thirdComment.upvote()

console.log('\nfirstComment.text:', firstComment.text, '\nfirstComment.votesQty:', firstComment.votesQty,
            '\nsecondComment.text:', secondComment.text, '\nsecondComment.votesQty:', secondComment.votesQty,
            '\nthirdComment.text:', thirdComment.text, '\nthirdComment.votesQty:', thirdComment.votesQty)
