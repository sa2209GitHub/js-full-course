/**
 *  Creational Design Patterns
 * 
 *      Constructor
 */

class Server {
    constructor(name, ip, port) {
        this.name = name
        this.ip = ip
        this.port = port
    }

    getUrl() {
        return `https://${this.ip}:${this.port}`
    }
}

const aws = new Server('AWS France', '84.75.72.21', '80')

console.log(aws.getUrl())