// Destructuring Assignment

const userProfile = {
    name: 'Jonh',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const { name, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile

console.log('const { name, commentsQty } = userProfile:', name, commentsQty)
console.log('const { hasSignedAgreement } = userProfile:', hasSignedAgreement)