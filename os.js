const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Free Memory: ${freeMemory} bytes`);
console.log(`Total Memory: ${totalMemory / 1048576} Megabytes`);