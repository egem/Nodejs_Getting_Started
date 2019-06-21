const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.emit('TEST_EVENT'); // will have no effect, since no one is listening

setImmediate( () => {
    myEmitter.emit('TEST_EVENT'); // We can use event loop to get the signal even event listeners don't register yet.
});

myEmitter.on('TEST_EVENT', () => {
    console.log("TEST_EVENT was fired");
});
myEmitter.on('TEST_EVENT', () => {
    console.log("TEST_EVENT was fired");
});
myEmitter.on('TEST_EVENT', () => {
    console.log("TEST_EVENT was fired");
});

// We can fire event here also, instead of using setImmediate.
// myEmitter.emit('TEST_EVENT');
