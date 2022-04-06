/**
 *  Structural Design Patterns
 * 
 *      Facade
 */

class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) {}

    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Product ID ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Service ID ${id}: ${customer} (${details})`
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint

        if (type === 'service') {
            complaint = new ServiceComplaints()
        }

        if (type === 'product') {
            complaint = new ProductComplaints()
        }

        return complaint.add({id, customer, details})
    }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Charley', 'service', 'not available'))
console.log(registry.register('Thomas', 'service', 'got an error'))
console.log(registry.register('Jack', 'product', 'does not turn on'))