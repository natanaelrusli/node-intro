// http module used for creating server that listen to requests
const http = require('http');

// Server is basically an event emitter
const server = http.createServer((req, res) => {

    // This events will be triggered when the url matched with the specified conditions
    if (req.url == '/') {
        res.write('Hello World!');
        res.end();
    }
    
    else if (req.url == '/users') {
        res.write('Hello, I\'m Koding Next');
        res.end();
    }

    else {
        res.write('ERROR 404 \nPage not Found');
        res.end();
    }
});

server.listen(5000);

console.log('Listening on port 5000');