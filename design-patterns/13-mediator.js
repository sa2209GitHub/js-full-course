/**
 *  Behavioral Design Patterns
 * 
 *      Mediator
 */

class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const user1 = new User('Thomas')
const user2 = new User('Jack')
const user3 = new User('Kyle')
const user4 = new User('Eddie')

const room = new ChatRoom()

room.register(user1)
room.register(user2)
room.register(user3)
room.register(user4)

user1.send('Hello!', user4)
user4.send('Hi!', user1)
user2.send('Hi all!')
user3.send('Well shut the fuck up everyone')