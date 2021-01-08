const path = require('path');

// __filename will parse the current file that we are in
var pathObj = path.parse(__filename);

// The result will be the directory address of the file
console.log(pathObj);