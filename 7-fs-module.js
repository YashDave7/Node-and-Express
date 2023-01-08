// fileSystem fs module.
// Synchronous --> line by line execution of code. waits for a function to get over.
const fs = require('fs');

// READING FILE CONTENT.
const first = fs.readFileSync('./1-basics.js','utf8');
console.log(first);
console.log('hello');

// WRITING INTO A FILE.
fs.writeFileSync('./7-fs-writeFile.txt',`Writing into this file using fs module`);