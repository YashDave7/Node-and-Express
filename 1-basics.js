// +++++++++++++++ BASIC GLOBAL THINGS ++++++++++++++
console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);


// SET-INTERVAL FUNCTION REPEATS AGAIN AND AGAIN AFTER A INTERVAL.
setInterval( () => {   
    console.log('hello yash');
}, 1000);


// SET- TIMEOUT FUNCTION EXECUTES AFTER THE GIVEN TIME.
setTimeout( () => {
    console.log("hello world");
}, 5000);
