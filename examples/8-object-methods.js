// Object Methods
// (properties which contains the functions)

const myServer = {
    name: 'BlaBlaServer',
    port: '3434',
    // function
    serverGreeting: function () {
        console.log(this.name, ': I\'m BlaBlaServer!')
    }
}

const myAnotherServer = {
    name: 'AnotherServer',
    port: '3435',
    // function
    serverGreeting() {
        console.log(this.name, ': I\'m Another Server!')
    }
}

myServer.serverGreeting()
myAnotherServer.serverGreeting()
