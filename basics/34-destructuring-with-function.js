// Destructuring Parameters with Function

const userProfile = {
    name: 'John',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

console.log('userInfo(userProfile):', userInfo(userProfile))