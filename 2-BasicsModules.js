// ++++++++++++++++ MODULES ++=++++++++++++++++ (3-names.js and 4-utils.js)
// Every file is a module.
// modules :- Encapsulated code.

const names = require('./3-names');
console.log(names);

const sayHii = require('./4-utils');
sayHii(names.yash);
sayHii('jash');
sayHii(names.john);