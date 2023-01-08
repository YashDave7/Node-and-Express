// Asynchronous fs module.
// Asynchronous method takes a call. It keeps running the program and when the function execution completes then the callback is run.
const fs = require('fs');

const read = fs.readFile('1-basics.js','utf8', (error, result)=> {
    if(error)
    {
        console.log(error);
        return;
    }
    console.log(result);
});
console.log(read);
console.log('hello');
fs.writeFile('./async.txt','Async',(err,result) => {
    if(err) {
        console.log('error');
        return;
    }
});