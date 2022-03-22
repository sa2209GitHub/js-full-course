// Function Parameter Default Value 2
// Implicit Object Return by '({})'

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

const firstPost = {
    id: 1,
    author: 'John',
}

newPost(firstPost)

const newPostWithDate = newPost(firstPost)

console.table(newPost(firstPost))

console.table(newPostWithDate)