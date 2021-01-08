const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
    console.log('A scream is detected!');
});

eventEmitter.emit('scream');