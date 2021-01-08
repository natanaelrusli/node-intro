// http module used for creating server that listen to requests
const http = require('http');

// Start node local server
const server = http.createServer((req, res) => {

    // This events will be triggered when the url matched with the specified conditions
    if (req.url == '/') {
        res.write('<h1>Hello World!</h1>');
        res.end();
    }
});

server.listen(5000);
console.log('Listening on port 5000');