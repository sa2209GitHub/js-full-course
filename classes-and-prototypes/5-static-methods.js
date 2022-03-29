// Classes and Prototypes
// Static Methods (Methods that are not Inherited by Class Instances)

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    // This method will not be inherited by all instances of the class
    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

Comment.mergeComments('First comment.', 'Second comment.')