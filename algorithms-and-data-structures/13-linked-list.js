/**
 *  Algorithms and Data Structures
 * 
 *      Linked List
 * 
 *  Basics
 */

class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value)
            this.size += 1
            return true
        }
        let node = this.root

        while (node.next) {
            node = node.next
        }
        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }

    getSize() {
        return this.size
    }

    print() {
        let result = []
        let node = this.root

        
        while (node) {
            result.push(node.value)
            node = node.next
        }
        console.log('myLinkedList:', result)
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const myLinkedList = new LinkedList()

for (let i = 0; i < 999; i += 13) {
    console.log('size:', myLinkedList.getSize())
    myLinkedList.print()
    myLinkedList.add(i)
}

myLinkedList.print()

