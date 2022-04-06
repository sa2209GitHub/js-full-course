/**
 *  Creational Design Patterns
 * 
 *      Factory
 */

class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumdMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

// Factory
class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumdMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.simple
        const member = new Membership(name)
        member.type = type
        member.define = function() {
            console.log(`${this.name}: ${this.type} $${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Harry', 'simple'),
    factory.create('Oliver', 'premium'),
    factory.create('Jack', 'standard'),
    factory.create('Charley'),
    factory.create('Thomas')
]

// console.log(members)

members.forEach(m => {
    m.define()
})