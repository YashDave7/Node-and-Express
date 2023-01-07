// ++++++++++ OS MODULE. ++++++++++ 
const os = require('os');

// info about the user(device).
const user = os.userInfo();
console.log(user);

// returns system uptime in seconds.
console.log(`System uptime is ${os.uptime()} seconds`);

// More details about user.
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS);