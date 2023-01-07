// ++++++++++ PATH MODULE. ++++++++++
const path = require('path');

// prints the path separator (\ or /).
console.log(path.sep);

// join function.
const filePath = path.join('/6-content-for-path-module/','path.txt');
console.log(filePath);

// base function.
console.log(path.basename(filePath));

// resolve function.
console.log(path.resolve(__dirname, '6-content-for-module','path.txt'));