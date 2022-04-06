/**
 *  Creational Design Patterns
 * 
 *      Singleton
 */

class Database {
    constructor(data) {
        console.log(`\nTrying to create '${data}'...`)
        if (Database.exists) {
            console.log(`Can't create new instance of Database.\nInstance already exists.`)
            return Database.instance
        }
        Database.instance = this
        Database.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const mongo = new Database('MongoDB')
console.log(`'${mongo.getData()}' created!`)

const mysql = new Database('MySQL')
console.log(`'${mysql.getData()}' created!`)

const maria = new Database('MariaDB')
console.log(`'${maria.getData()}' created!`)